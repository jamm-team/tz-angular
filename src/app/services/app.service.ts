import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import {StorageService} from './storage.service';
import {Subject} from 'rxjs';
import {MatDrawer} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private token: string;

  private scrollLeft: number;
  chartScrollChange: Subject<number> = new Subject<number>();

  public drawer: MatDrawer;

  constructor(
    private router: Router,
    private storage: StorageService,
  ) {

    this.chartScrollChange.subscribe((value) => {
      this.scrollLeft = value;
    });
  }

  scrollChart(scrollLeft: number) {
    this.chartScrollChange.next(scrollLeft);
  }

  setToken(token: string): void {
    this.token = token;
    this.storage.setItem('token', this.token);
  }

  getToken(): string {
    if (this.token) {
      return this.token;
    }

    this.token = this.storage.getItem('token') || '';
    return this.token;
  }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

}
