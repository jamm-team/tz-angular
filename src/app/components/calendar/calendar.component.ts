import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { DatePeriod, DateService } from '../../services/date.service';
import {AppService} from '../../services/app.service';
import {ModalService} from '../../services/modal.service';
import {EventModalComponent} from './event-modal/event-modal.component';
import {
  Calendar,
  CalendarBlock,
  CalendarEvent,
  CalendarEventPeriod,
  CalendarGroup,
  CalendarInput,
  CalendarInputValue
} from './calendar.model';
import {ApiService} from '../../services/api.service';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {
  @Input() start: Date;
  @Input() end: Date;
  @Input() daySize: number;
  @Input() eventItemHeaderSize: number;
  @Input() calendar: Calendar;

  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();

  showHistory: false;
  datePeriod: DatePeriod;

  @ViewChild('chartScrollHeader', { static: true }) chartScrollHeader: ElementRef;
  @ViewChild('chartScrollBody', { static: true }) chartScrollBody: ElementRef;
  chartElementScrollHeader: HTMLElement;
  chartElementScrollBody: HTMLElement;

  constructor(
    private date: DateService,
    private app: AppService,
    private modalService: ModalService,
    private apiService: TestService
  ) {
  }

  ngOnInit() {
    this.chartElementScrollHeader = this.chartScrollHeader.nativeElement as HTMLElement;
    this.chartElementScrollBody = this.chartScrollBody.nativeElement as HTMLElement;

    this.app.chartScrollChange.subscribe(value => {
      this.chartElementScrollHeader.scrollLeft = value;
      this.chartElementScrollBody.scrollLeft = value;
    });

    this.datePeriod = new DatePeriod( this.start, this.end );
  }

  toggleHistory() {
    this.calendar.history = !this.calendar.history;
    this.saveCalendar();
  }

  addBlock(): void {
    const newBlock = new CalendarBlock({
      title: 'Новый блок'
    });

    this.calendar.blocks.push(newBlock);
    this.saveCalendar();
  }

  addGroup(block: CalendarBlock): void {
    const newGroup = new CalendarGroup({
      title: 'Новая группа'
    });

    block.groups.push(newGroup);
    this.saveCalendar();
  }

  addEvent(group: CalendarGroup): void {
    const newEvent = new CalendarEvent({
      title: 'Новое событие'
    });

    group.events.push(newEvent);
    this.saveCalendar();
  }

  addInput(group: CalendarGroup): void {
    const newInput = new CalendarInput({
      title: 'Новый параметр'
    });

    group.inputs.push(newInput);
    this.saveCalendar();
  }

  renameCalendar(value: string): void {
    if (value && value !== this.calendar.title) {
      this.calendar.title = value;
      this.saveCalendar();
    }
  }

  renameBlock(block: CalendarBlock, value: string): void {
    if (value && value !== block.title) {
      block.title = value;
      this.saveCalendar();
    }
  }

  renameGroup(group: CalendarGroup, value: string): void {
    if (value && value !== group.title) {
      group.title = value;
      this.saveCalendar();
    }
  }

  renameEvent(event: CalendarEvent, value: string): void {
    if (value && value !== event.title) {
      event.title = value;
      this.saveCalendar();
    }
  }

  deleteCalendar(): void {
    const modalRef = this.modalService.open(ConfirmModalComponent,  {
      centered: true,
      size: 'sm',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.confirmTitle = 'Подтверждение';
    modalRef.componentInstance.confirmText = 'Удалить календарь ' + this.calendar.title;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        this.apiService.delCalendar(this.calendar.id)
          .subscribe((data: any) => {
            if (data.success) {
              this.delete.emit(true);
            }
          });
      }
    });
  }

  deleteBlock(index: number): void {
    const modalRef = this.modalService.open(ConfirmModalComponent,  {
      centered: true,
      size: 'sm',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.confirmTitle = 'Подтверждение';
    modalRef.componentInstance.confirmText = 'Удалить блок ' + this.calendar.blocks[index].title;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        this.calendar.blocks.splice(index, 1);
        this.saveCalendar();
      }
    });
  }

  deleteGroup(block, index: number): void {
    const modalRef = this.modalService.open(ConfirmModalComponent,  {
      centered: true,
      size: 'sm',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.confirmTitle = 'Подтверждение';
    modalRef.componentInstance.confirmText = 'Удалить группу ' + block.groups[index].title;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        block.groups.splice(index, 1);
        this.saveCalendar();
      }
    });
  }

  deleteEvent(group, index: number): void {
    const modalRef = this.modalService.open(ConfirmModalComponent,  {
      centered: true,
      size: 'sm',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.confirmTitle = 'Подтверждение';
    modalRef.componentInstance.confirmText = 'Удалить Запись ' + group.events[index].title;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        group.events.splice(index, 1);
        this.saveCalendar();
      }
    });
  }

  deleteInput(group, index: number): void {
    const modalRef = this.modalService.open(ConfirmModalComponent,  {
      centered: true,
      size: 'sm',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.confirmTitle = 'Подтверждение';
    modalRef.componentInstance.confirmText = 'Удалить параметр ' + group.inputs[index].title;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        group.inputs.splice(index, 1);
        this.saveCalendar();
      }
    });
  }

  isInputCalendar(): boolean {
    return this.calendar.type === 2;
  }

  isEventCalendar(): boolean {
    return this.calendar.type === 1;
  }

  getDate2digit(date): string {
    return DateService.getDate2digit(date);
  }

  getTestInputValue(inputValue, i) {
    return Math.round(inputValue * (1 + (i * 0.01)));
  }

  updateScroll(): void{
    this.app.scrollChart(this.chartElementScrollBody.scrollLeft);
  }

  stylePeriod(size: number, offset: number): any {
    return {
      width: (size * this.daySize) + 'px',
      left: (offset * this.daySize) + 'px'
    };
  }

  addEventPeriodBlock(start: Date, end: Date, event: CalendarEvent): void {
    const modalRef = this.modalService.open(EventModalComponent,  {
      centered: true,
      size: 'md',
      backdrop : 'static',
      keyboard : false
    });

    const newCalendarEventPeriod = new CalendarEventPeriod({
        start,
        end,
        color: '#000'
      }, this.start);

    event.periods.push(newCalendarEventPeriod);

    modalRef.componentInstance.calendarEventPeriod = newCalendarEventPeriod;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
        this.saveCalendar();
      } else {
        event.periods.pop();
      }
    });
  }

  updEventPeriodBlock(calendarEventPeriod: CalendarEventPeriod) : void{
    const modalRef = this.modalService.open(EventModalComponent,  {
      centered: true,
      size: 'md',
      backdrop : 'static',
      keyboard : false
    });

    modalRef.componentInstance.calendarEventPeriod = calendarEventPeriod;

    modalRef.componentInstance.change.subscribe(($e) => {
      if ($e) {
       this.saveCalendar();
      } else {
        // TODO добавить проверку что были изменения (dirty flag)
        this.reloadCalendar();
      }
    });
  }

  addInputValue(start: Date, input: CalendarInput): void {
    const сalendarInputValue = new CalendarInputValue({
      start,
      value: 0
    }, this.start);
    input.values.push(сalendarInputValue);
    this.saveCalendar();
  }

  changeInputValue(calendarInputValue: CalendarInputValue, newValue: any): void {
    if (calendarInputValue.value !== newValue) {
      newValue = parseInt(newValue, 10);

      if (!isNaN(newValue) && calendarInputValue.value !== newValue) {
        calendarInputValue.value = newValue;
        this.saveCalendar();
      } else {
        // TODO Вызвать обновление переменной чтобы сбросить изменения
      }
    }
  }

  eventItemHeaderSizeP(): any {
    return {
      width: this.eventItemHeaderSize + 'px',
    };
  }

  saveCalendar(): any {
    if (this.calendar.isHistory) {
      return;
    }

    this.apiService.setCalendar(this.calendar)
      .subscribe((data: any) => {
        if (!data.success) {
          return false;
        }
    });
  }

  reloadCalendar(): void {
    this.apiService.getCalendar({
      id: this.calendar.id
    }).subscribe((data: any) => {
      if (data.success) {
        this.calendar = new Calendar (data.data[0], this.start, this.end);
      }
    });
  }

}
