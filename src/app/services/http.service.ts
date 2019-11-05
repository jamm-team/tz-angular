import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppService } from './app.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface RequestData {
  url: string;
  data?: any;
  headers?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl;

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) {
    this.getUrl();
  }

  postObservable(url, requestData = {}) {

    console.log('API:  ', url);

    return this.http.post(
      this.apiUrl + '/' + url,
      requestData,
      {headers: new HttpHeaders(this.getHttpHeaders())}
    ).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( error => of(`Bad Promise: ${error}`) )
    );
  }

  postPromise(url, requestData = {}) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(
         this.apiUrl + url,
         requestData,
         {headers: new HttpHeaders(this.getHttpHeaders())}
      ).subscribe((responseData: any) => {
          if (responseData && responseData.success === true) {
            resolve(responseData);
          } else {
            reject(responseData);
          }
        }
      );
    });
  }

  private getHttpHeaders() {
    return {
      'X-Token': 'xxx'
    };
  }

  private getUrl() {
      this.apiUrl = 'http';
  }
}
