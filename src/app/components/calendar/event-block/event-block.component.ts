import {Component, Input, OnInit} from '@angular/core';
import {CalendarEventPeriod} from '../calendar.model';

@Component({
  selector: 'app-calendar-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.css'],
})

export class EventBlockComponent implements OnInit {
  @Input() calendarEventPeriod: CalendarEventPeriod;
  @Input() daySize: number;

  constructor() {
  }

  ngOnInit() {

  }

  get styleEventPeriod() {
    return {
      width: ((this.calendarEventPeriod.size * this.daySize) - 1) + 'px',
      left: (this.calendarEventPeriod.offset * this.daySize) + 'px',
      'background-color' : this.calendarEventPeriod.color
    };
  }
}

