import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DateService} from './date.service';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  periodStart = new BehaviorSubject<Date>(null);
  periodEnd = new BehaviorSubject<Date>(null);

  private daySize: number;
  private eventItemHeaderSize: number;

  constructor(
    private dateService: DateService,
    private storageService: StorageService
  ) {
    const dateCurrent = new Date();
  }

  getPeriodStart(): Date {
    if (!this.periodStart.getValue()) {
      let periodStart = parseInt(this.storageService.getItem('periodStart'), 10);
      if (!periodStart) {
        periodStart = new Date( (new Date()).getFullYear(), 0, 1 ).getTime();
        this.storageService.setItem('periodStart', periodStart);
      }
      this.periodStart.next(new Date(periodStart));
    }

    return this.periodStart.getValue();
  }

  setPeriodStart(value: Date): void {
    value.setHours(0);

    if (this.periodStart.getValue().getTime() !== value.getTime()) {
      if (DateService.diffDays(value, this.getPeriodEnd()) < 1000) {
        this.storageService.setItem('periodStart', value.getTime());
        this.periodStart.next(value);
      }
    }
  }

  getPeriodEnd(): Date {
    if (!this.periodEnd.getValue()) {
      let periodEnd = parseInt(this.storageService.getItem('periodEnd'), 10);
      if (!periodEnd) {
        periodEnd = new Date( (new Date()).getFullYear() + 1, 0, 31 ).getTime();
        this.storageService.setItem('periodEnd', periodEnd);
      }
      this.periodEnd.next(new Date(periodEnd));
    }

    return this.periodEnd.getValue();
  }

  setPeriodEnd(value: Date): void {
    value.setHours(0);

    if (this.periodEnd.getValue().getTime() !== value.getTime()) {
      if (DateService.diffDays(value, this.getPeriodEnd()) < 1000) {
        this.storageService.setItem('periodEnd', value.getTime());
        this.periodEnd.next(value);
      }
    }
  }

  getEventItemHeaderSize(): number {
    if (!this.eventItemHeaderSize) {
      this.eventItemHeaderSize = parseInt(this.storageService.getItem('eventItemHeaderSize'), 10);
      if (!this.eventItemHeaderSize) {
        this.setEventItemHeaderSize(400);
      }
    }
    return this.eventItemHeaderSize;
  }

  setEventItemHeaderSize(value: number): void {
    if (this.eventItemHeaderSize !== value) {
      this.storageService.setItem('eventItemHeaderSize', value);
      this.eventItemHeaderSize = value;
    }
  }

  getDaySize(): number {
    if (!this.daySize) {
      this.daySize = parseInt(this.storageService.getItem('daySize'), 10);
      if (!this.daySize) {
        this.setDaySize(3);
      }
    }
    return this.daySize;
  }

  setDaySize(value: number): void {
    if (this.daySize !== value) {
      this.storageService.setItem('daySize', value);
      this.daySize = value;
    }
  }

  fillData(data: any): void {
    if (data.periodStart) {
      this.setPeriodStart(data.periodStart);
    }

    if (data.periodEnd) {
      this.setPeriodEnd(data.periodEnd);
    }

    if (data.daySize) {
      this.daySize = data.daySize;
    }
  }

}





