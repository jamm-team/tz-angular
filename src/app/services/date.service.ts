import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DateService {
  dateCurrent: Date;
  datePeriod: DatePeriod;

  constructor(
  ) {
    this.dateCurrent = new Date();
  }

  /*
   * Разница в днях (дни включительно)
   */
  public static diffDays(start: Date, end: Date): number {
    const day = 1000 * 60 * 60 * 24;
    const diff = Math.floor((end.getTime() + day) - start.getTime());

    return Math.floor((diff) / day);
  }

  /*
   * Последний день месяца
   */
  public static monthLastDay(date: Date): number {
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
  }


  /*
   * Номер недели
   */
  public static getWeekNumber(date: Date): number {
    const date1 = new Date(date.getTime());

    date1.setDate(date1.getDate() + 3 - (date1.getDay() + 6) % 7);

    const date2 = new Date(date.getFullYear(), 0, 4);

    return 1 + Math.round(((date.getTime() - date2.getTime()) / 86400000
      - 3 + (date2.getDay() + 6) % 7) / 7);
  }

  /*
   * Проверка день находится в периоде
   */
  public static dayInPeriod(periodStart: Date, periodEnd: Date, date: Date) {
    return (date.getTime() >= periodStart.getTime() && date.getTime() <= periodEnd.getTime());
  }

  public static getDate2digit(date: Date) {
    return ('0' + date.getDate()).slice(-2);
  }


}

export class DatePeriod {
  start: Date;
  end: Date;
  size: number;
  years: DatePeriodItem[];
  months: DatePeriodItem[];
  weeks: DatePeriodItem[];

  constructor( start: Date, end: Date) {
    this.setPeriod (
      new Date(start.getTime()),
      new Date(end.getTime())
    );
  }

  public setPeriod(start: Date, end: Date) {

    // TODO доработать инициацию для дефолт значения и для входных параметров периода
    this.start = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
    this.end = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 0, 0, 0);
    this.size = DateService.diffDays(this.start, this.end);

    this.years = [];
    this.getPeriodYears(this.start);

    this.months = [];
    this.getPeriodMonths(this.start);

    this.weeks = [];
    this.getPeriodWeeks(this.start);

  }

  /*
   * Получение смещения (в днях) внутри периода
   */
  private periodOffset(date): number {
    return DateService.diffDays(this.start, date) - 1;
  }


  /*
   * Получение годов в периоде
   */
  private getPeriodYears(start: Date): void {
    const periodItem: DatePeriodItem = new DatePeriodItem();

    const endPeriodItem = new Date(start.getFullYear(), 11, 31);
    periodItem.name = start.getFullYear().toString();

    periodItem.start = new Date(start.getTime());
    periodItem.end = (endPeriodItem.getTime() >= this.end.getTime()) ?  new Date(this.end) : endPeriodItem;
    periodItem.size = DateService.diffDays(periodItem.start, periodItem.end);
    periodItem.offset = this.periodOffset(start);

    this.years.push(periodItem);

    if (this.end.getTime() > endPeriodItem.getTime()) {
      const startNext = new Date(periodItem.end);
      startNext.setDate(startNext.getDate() + 1);
      this.getPeriodYears(startNext);
    }
  }

  /*
   * Получение месяцев в периодe
   */
  private getPeriodMonths(start: Date): void {
    const periodItem: DatePeriodItem =  new DatePeriodItem();

    const endPeriodItem = new Date(start.getTime());
    endPeriodItem.setDate(DateService.monthLastDay(endPeriodItem));
    periodItem.name = start.toLocaleString('ru', { month: 'long' });

    periodItem.start = new Date(start.getTime());
    periodItem.end = (endPeriodItem.getTime() >= this.end.getTime()) ?  new Date(this.end) : endPeriodItem;
    periodItem.size = DateService.diffDays(periodItem.start, periodItem.end);
    periodItem.offset = this.periodOffset(start);

    this.months.push(periodItem);

    if (this.end.getTime() > endPeriodItem.getTime()) {
      const startNext = new Date(periodItem.end);
      startNext.setDate(startNext.getDate() + 1);
      this.getPeriodMonths(startNext);
    }

  }

  /*
   * Получение недель в периоде
   */
  private getPeriodWeeks(start: Date): void {
    const periodItem: DatePeriodItem =  new DatePeriodItem();

    const endPeriodItem = new Date(start.getTime());
    endPeriodItem.setDate(start.getDate() + ((start.getDay() !== 0) ? 7 - start.getDay() : 1));
    periodItem.name = DateService.getWeekNumber(start).toString();

    periodItem.start = new Date(start.getTime());
    periodItem.end = (endPeriodItem.getTime() >= this.end.getTime()) ?  new Date(this.end) : endPeriodItem;
    periodItem.size = DateService.diffDays(periodItem.start, periodItem.end);
    periodItem.offset = this.periodOffset(start);

    this.weeks.push(periodItem);

    if (this.end.getTime() > endPeriodItem.getTime()) {
      const startNext = new Date(periodItem.end);
      startNext.setDate(startNext.getDate() + 1);
      this.getPeriodWeeks(startNext);
    }
  }

}

export class DatePeriodItem {
  name: string;
  size: number;
  offset: number;
  start: Date;
  end: Date;
}



