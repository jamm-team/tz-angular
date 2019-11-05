import { DateService } from '../../services/date.service';
import {computed} from 'mobx';

/*
 *  TODO убрать из моделей параметры периода (start, end)
 */

export class Calendar {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: number;
  active: boolean;
  history: boolean;
  blocks: CalendarBlock[];

  isHistory: boolean;

  constructor(data: any, start?: Date, end?: Date) {
    this.fillData(data, start, end);
  }

  private fillData( data: any, start?: Date, end?: Date ): void {

    this.active = data.active || false;

    if (this.active) {
      const dateCurrent = new Date();

      this.id = data.id || null;
      this.start = start || new Date( dateCurrent.getFullYear(), 0, 6 );
      this.end = end ||  new Date( (dateCurrent.getFullYear() + 1) , 0, 31 );
      this.title = data.title || 'Календарь';
      this.type = data.type || 0;
      this.history = data.history || false;

      this.blocks = [];
      if (data.blocks) {
        data.blocks.forEach((item) => {
          const calendarItem = new CalendarBlock(item, start, end);
          this.blocks.push(calendarItem);
        });
      }
    }
  }
}

export class CalendarBlock {
  id: number;
  title: string;
  groups: CalendarGroup[];

  constructor(data: any, start?: Date, end?: Date) {
    if (data) {
      this.fillData(data, start, end);
    }
  }

  private fillData(data: any, start?: Date, end?: Date): void {
    this.id = data.id || null;
    this.title = data.title || 'Блок';

    this.groups = [];
    if (data.groups) {
      data.groups.forEach((item) => {
        const calendarItem = new CalendarGroup(item, start, end);
        this.groups.push(calendarItem);
      });
    }
  }
}

export class CalendarGroup {
  id: number;
  title: string;
  events: CalendarEvent[];
  inputs: CalendarInput[];

  constructor(data?: any, start?: Date, end?: Date) {
    this.fillData(data, start, end);
  }

  private fillData(data?: any, start?: Date, end?: Date): void {
    this.id = data.id || null;
    this.title = data.title || 'Группа';

    this.events = [];
    if (data.events) {
      data.events.forEach((event) => {
        const calendarEvent = new CalendarEvent(event, start, end);
        this.events.push(calendarEvent);
      });
    }

    this.inputs = [];
    if (data.inputs) {
      data.inputs.forEach((input) => {
        const calendarInput = new CalendarInput(input, start, end);
        this.inputs.push(calendarInput);
      });
    }
  }
}

export class CalendarEvent {
  title: string;
  parent: number;
  periods: CalendarEventPeriod[];

  constructor( data?: any, start?: Date, end?: Date ) {
    this.fillData(data, start, end);
  }

  private fillData( data?: any, start?: Date, end?: Date ): void {
    this.title = data.title || '';
    this.parent = data.parent || null;

    this.periods = [];
    if (data.periods) {
      data.periods.forEach((period) => {

        const calendarEventPeriod = new CalendarEventPeriod(period, start);

        // Проверка на вхождение события в период должна быть на backend.
        if (DateService.dayInPeriod(start, end, calendarEventPeriod.start)
          || DateService.dayInPeriod(start, end, calendarEventPeriod.end)
        ) {
          this.periods.push(calendarEventPeriod);
        }

      });
    }
  }
}

export class CalendarEventPeriod {
  periodStart: Date;
  start: Date;
  end: Date;
  title: string;
  type: number;
  description: string;
  image: string;
  color: string;

  constructor(data: any, start: Date) {
    this.fillData(data, start);
  }

  @computed get size() {
    let size = DateService.diffDays(this.start, this.end);
    if (size <= 0) {
      size = 1;
    }

    return size;
  }

  @computed get offset() {
    return DateService.diffDays(this.periodStart, this.start) - 1;
  }

  private fillData( data: any, start?: Date): void {
    this.periodStart = start || new Date();

    this.start = (typeof data.start === 'string') ? new Date(data.start) : data.start || null;
    this.end = (typeof data.end === 'string') ? new Date(data.end) : data.end || null;
    this.title = data.title || '';
    this.type = data.type || null;
    this.description = data.description || '';
    this.image = data.image || null;
    this.color = data.color || null;
  }
}

export class CalendarInput {
  title: string;
  values: CalendarInputValue[];

  constructor( data?: any, start?: Date, end?: Date) {
    this.fillData(data, start, end);
  }

  private fillData( data?: any, start?: Date, end?: Date): void {
    this.title = data.title || '';

    this.values = [];
    if (data.values) {
      data.values.forEach((value) => {

        const calendarInputValue = new CalendarInputValue(value, start);

        this.values.push(calendarInputValue);

      });
    }

  }
}

export class CalendarInputValue {
  periodStart: Date;
  start: Date;
  value: number;

  constructor( data?: any, start?: Date) {
    this.fillData(data, start);
  }

  @computed get offset() {
    return DateService.diffDays(this.periodStart, this.start) - 1;
  }


  private fillData( data: any, start?: Date): void {
    this.periodStart = start || new Date();

    this.start = (typeof data.start === 'string') ? new Date(data.start) : data.start || null;
    this.value = (data.value !== undefined) ? data.value : 3333;

  }
}
