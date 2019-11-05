import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDay'
})
export class DateDayPipe implements PipeTransform {

  transform(date: Date): string {

    //const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return  date.toLocaleDateString('ru-RU') ;
  }
}
