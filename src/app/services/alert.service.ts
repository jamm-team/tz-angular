import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  confirm(header: string, message: string, noText = 'Нет', yesText = 'Да') {
    console.log(header, message, noText, yesText);
  }

  alert(header: string, message: string) {
    console.log(header, message);
  }

  error(error: any) {
    console.log('error', error);
  }
}
