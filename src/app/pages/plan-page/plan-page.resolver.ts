import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from '../../services/api.service';
import {AppService} from '../../services/app.service';
import {TestService} from '../../services/test.service';

@Injectable()
export class PlanPageResolver implements Resolve<any> {

  constructor(
    private apiService: TestService,
    private appService: AppService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {

    if (!route.params.token) {
      this.appService.getToken();
    } else {
      this.appService.setToken(route.params.token);
    }

    return this.apiService.getCalendar();
  }

}
