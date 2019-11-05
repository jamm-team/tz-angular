import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TestService } from './test.service';
import {Calendar} from '../components/calendar/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpService: HttpService,
    private testService: TestService
  ) {}

  getCalendar(data?) {
     // return this.testService.getCalendar();
    return this.httpService.postObservable('get-calendar' , data);
  }

  setCalendar(calendar: Calendar) {
    return this.httpService.postObservable('set-calendar', calendar );
  }

  delCalendar(id: string) {
    return this.httpService.postObservable('del-calendar', {
      id
    } );
  }

  uploadImage(image: any) {
    return this.httpService.postObservable('upload-image', image );
  }
}



