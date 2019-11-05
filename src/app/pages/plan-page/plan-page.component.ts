import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateService } from '../../services/date.service';
import { MatDrawer } from '@angular/material';
import { AppService} from '../../services/app.service';
import { SettingService } from '../../services/setting.service';
import {Calendar, CalendarBlock} from '../../components/calendar/calendar.model';
import {ApiService} from '../../services/api.service';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-buyer-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})

export class PlanPageComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer: MatDrawer;
  calendars: Calendar[];

  constructor(
    private route: ActivatedRoute,
    private dateService: DateService,
    private appService: AppService,
    private apiService: TestService,
    private settingService: SettingService
  ) {

    this.settingService.periodStart.subscribe((value: Date) => {
      this.setCalendarsPeriod(this.calendars, value, this.settingService.getPeriodEnd());
    });

    this.settingService.periodEnd.subscribe((value: Date) => {
      this.setCalendarsPeriod(this.calendars, this.settingService.getPeriodStart(), value);
    });

  }

  ngOnInit() {
    this.appService.setDrawer(this.drawer);

    if (this.route.snapshot.data.calendarLoadData.success) {
      this.setCalendarsPeriod(
        this.route.snapshot.data.calendarLoadData.data,
        this.settingService.getPeriodStart(),
        this.settingService.getPeriodEnd()
      );
    }
  }

  setCalendarsPeriod(data: any[], periodStart: Date, periodEnd: Date): void {
    if (!data) {
      return;
    }

    const dataA = [...data];

    this.calendars = [];

    if (!data.length) {
      return;
    }

    dataA.forEach((calendar) => {

      this.calendars.push(
        new Calendar(calendar, periodStart, periodEnd)
      );

      if (calendar.history) {
        const periodHistoryStart = new Date( periodStart.getTime() );
        periodHistoryStart.setFullYear(periodStart.getFullYear() - 1);
        const periodHistoryEnd = new Date( periodEnd.getTime() );
        periodHistoryEnd.setFullYear(periodEnd.getFullYear() - 1);

        const eventHistory = Object.assign({}, calendar);
        eventHistory.title += '. История (-1 год)';
        eventHistory.history = false;

        const historyCalendar = new Calendar(eventHistory, periodHistoryStart, periodHistoryEnd);
        historyCalendar.isHistory = true;
        this.calendars.push( historyCalendar );
      }
    });
  }

  addCalendar(data: any) {
    const newCalendar = new Calendar({
        title: 'Новый ' + data.title,
        type: data.type,
        active: true
      }
    );

    this.apiService.setCalendar(newCalendar).subscribe((res: any) => {
      if (res.success) {
        newCalendar.id = res.id;
        this.calendars.push(newCalendar);
        this.setCalendarsPeriod(this.calendars, this.settingService.getPeriodStart(), this.settingService.getPeriodEnd());
      }
    });
  }

  deleteCalendar(index: number) {
    this.calendars.splice(index, 1);
    this.setCalendarsPeriod(this.calendars, this.settingService.getPeriodStart(), this.settingService.getPeriodEnd());
  }
}

