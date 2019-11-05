import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarEventPeriod, CalendarInputValue} from '../calendar.model';

@Component({
  selector: 'app-calendar-input-value',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.css'],
})

export class InputBlockComponent implements OnInit {
  @Input() calendarInputValue: CalendarInputValue;
  @Input() daySize: number;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  get styleInputValue(): any {
    return {
      width: (this.daySize * 7) + 'px',
      left: (this.calendarInputValue.offset * this.daySize) + 'px'
    };
  }

  changeInputValue(value: string): void {
    this.change.emit(value);
  }
}

