import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Calendar} from '../components/calendar/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
  ) {}

  getSettingData(): Observable<any> {

    console.log('TEST API. get Setting Data');

    return new Observable((observer) => {
      observer.next({
        success: true,
        data: {
          daySize: 5,
          periodStart: new Date( (new Date()).getFullYear(), 0, 6 ),
          periodEnd: new Date( (new Date()).getFullYear() + 1, 0, 31 )
        }
      });
      observer.complete();
    });

  }

  getCalendar(data?): Observable<any> {

    console.log('TEST API. get Calendar Event Data');

    return new Observable((observer) => {
      observer.next({
        success: true,
        data: [{
          title: 'PROMOTION',
          type: 1, history: false,
          active: false,
          blocks: [{
            id: 1, title: 'События',
            groups: [{
              id: 1, title: 'Периодические',
              events: [{
                title: 'ЗП',
                periods: [{ title: '',
                  start: new Date( 2019, 0, 23 ), end: new Date( 2019, 0, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 1, 23 ), end: new Date( 2019, 1, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 2, 23 ), end: new Date( 2019, 2, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 3, 23 ), end: new Date( 2019, 3, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 4, 23 ), end: new Date( 2019, 4, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 5, 23 ), end: new Date( 2019, 5, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 6, 23 ), end: new Date( 2019, 6, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 7, 23 ), end: new Date( 2019, 7, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 8, 23 ), end: new Date( 2019, 8, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 9, 23 ), end: new Date( 2019, 9, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 10, 23 ), end: new Date( 2019, 10, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2019, 11, 23 ), end: new Date( 2019, 11, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '',
                  start: new Date( 2020, 0, 23 ), end: new Date( 2020, 0, 30 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }]
              }, {
                title: 'Праздники',
                periods: [{ title: 'НГ',
                  start: new Date( 2018, 11, 27 ), end: new Date( 2019, 0, 10 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'Валентин',
                  start: new Date( 2019, 1, 11 ), end: new Date( 2019, 1, 17 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '23 февраля',
                  start: new Date( 2019, 1, 18 ), end: new Date( 2019, 1, 24 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '8 марта',
                  start: new Date( 2019, 2, 4 ), end: new Date( 2019, 2, 10 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'пасха',
                  start: new Date( 2019, 3, 15 ), end: new Date( 2019, 3, 21 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: '1 мая',
                  start: new Date( 2019, 3, 29 ), end: new Date( 2019, 4, 5 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'День победы',
                  start: new Date( 2019, 4, 6 ), end: new Date( 2019, 4, 12 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'Конец уч. года',
                  start: new Date( 2019, 4, 25 ), end: new Date( 2019, 5, 2 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'Школа',
                  start: new Date( 2019, 7, 26 ), end: new Date( 2019, 8, 2 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'День учителя',
                  start: new Date( 2019, 8, 30 ), end: new Date( 2019, 9, 6 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'Halloween',
                  start: new Date( 2019, 9, 28 ), end: new Date( 2019, 10, 3 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }, { title: 'НГ',
                  start: new Date( 2019, 11, 23 ), end: new Date( 2020, 0, 12 ),
                  type: 1, description: 'Описание 1', image: null, color: '#9f9e9a'
                }]
              }]
            }, {
              id: 1, title: 'Разовые',
              events: [{
                title: 'Открытие новых ресторанов',
                periods: [{ title: 'Питер',
                  start: new Date( 2019, 3, 29 ), end: new Date( 2019, 4, 12 ),
                  type: 1, description: 'Описание 1', image: null, color: '#f76363'
                }]
              }]
            }]
          }, {
            id: 1, title: 'Menu update',
            groups: [{
              id: 1, title: 'Main menu update',
              events: [{
                title: 'Food',
                periods: [{ title: 'CORE MENU AS OF OCTOBER 2013',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2019, 1, 24 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ffc848'
                }, { title: 'MARCH, 4 - CORE MENU UPDATE. FOCUS: Design, Up to 10 upd recipes',
                  start: new Date( 2019, 1, 25 ), end: new Date( 2019, 10, 22 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ff8548'
                }, { start: new Date( 2019, 10, 23 ), end: new Date( 2020, 0, 31 ),
                  title: 'OCTOBER 1 ST: CORE MENU UPDATE + Poultry Burgers',
                  type: 1, description: 'Описание 1', image: null, color: '#ffc848'
                }]
              }, {
                title: 'Bar',
                parent: 1,
                periods: [{ title: 'CORE BAR MENU AS OF OCTOBER 2013',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2019, 2, 23 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ffc848'
                }, { title: 'March 20 - CORE BAR MENU UPDATE',
                  start: new Date( 2019, 2, 24 ), end: new Date( 2019, 6, 27 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ff8548'
                }, { title: 'BAR MENU REPRINT ACCORDING TO NEW CONTRACTS',
                  start: new Date( 2019, 6, 28 ), end: new Date( 2019, 9, 19 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ffc848'
                }, { title: 'BAR MENU REPRINT W NEW ITEMS',
                  start: new Date( 2019, 9, 20 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#ff8548'
                }]
              }]
            }, {
              id: 5, title: 'Price/menu change',
              events: [{
                title: 'Price/menu change',
                parent: 1,
                periods: [{ title: 'lunch reprint',
                  start: new Date( 2019, 1, 3 ), end: new Date( 2019, 1, 10 ),
                  type: 1, description: 'Описание 1', image: null, color: '#79aefe'
                }, { title: 'Bar reprint',
                  start: new Date( 2019, 2, 24 ), end: new Date( 2019, 2, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#79aefe'
                }, { start: new Date( 2019, 3, 21 ), end: new Date( 2019, 3, 28 ),
                  title: 'Core reprint',
                  type: 1, description: 'Описание 1', image: null, color: '#79aefe'
                }, {
                  start: new Date(2019, 8, 29), end: new Date(2019, 9, 6),
                  title: 'F2%',
                  type: 1, description: 'Описание 1', image: null, color: '#79aefe'
                }, {
                  start: new Date(2019, 9, 20), end: new Date(2019, 9, 27),
                  title: 'Bar reprint',
                  type: 1, description: 'Описание 1', image: null, color: '#79aefe'
                }]
              }]
            }]
          }, {
            id: 2, title: 'Promotion',
            groups: [{
              id: 2, title: 'Primary Promotion',
              events: [{
                title: 'Food',
                periods: [{ title: 'STACK HOUSE BURGERS (Moscow); TWISTER (Regions)',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2019, 2, 2 ),
                  type: 1, description: 'Описание 1', image: null, color: '#3ffd01'
                }, { title: 'LUNCH SUPPORT',
                  start: new Date( 2019, 2, 3 ), end: new Date( 2019, 3, 20 ),
                  type: 1, description: 'Описание 1', image: null, color: '#229922'
                }, { title: 'Apr 22 - Sept 1 / Carribean',
                  start: new Date( 2019, 3, 21 ), end: new Date( 2019, 8, 1 ),
                  type: 1, description: 'Описание 1', image: null, color: '#3ffd01'
                }, { title: 'Sept 2 - Jan 31 SMALL PLATES (Taste of America)',
                  start: new Date( 2019, 8, 2 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#229922'
                }]
              }, {
                title: 'Bar',
                periods: [{ title: 'Apr 22 - Oct 5 / SUMMER DRINKS - Margaritas ',
                  start: new Date( 2019, 3, 22 ), end: new Date( 2019, 9, 5 ),
                  type: 1, description: 'Описание 1', image: null, color: '#229922'
                }, { title: 'Oct 6 - End Feb HOT COCKTAILS',
                  start: new Date( 2019, 9, 6 ), end: new Date( 2020, 1, 28 ),
                  type: 1, description: 'Описание 1', image: null, color: '#3ffd01'
                }]
              }]
            }, {
              id: 3, title: 'Support Promotion',
              events: [{
                title: 'Food',
                periods: [{ title: 'Desserts till March 9th',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2019, 2, 9 ),
                  type: 1, description: 'Описание 1', image: null, color: '#d3ec51'
                }, { title: 'LENTEN MENU March 3 - April 19 ',
                  start: new Date( 2019, 2, 3 ), end: new Date( 2019, 3, 19 ),
                  type: 1, description: 'Описание 1', image: null, color: '#a6c40b'
                }, { title: 'Apr 22 - Sept 1 Twister (Moscow) + Southwest Twisted burger',
                  start: new Date( 2019, 3, 20 ), end: new Date( 2019, 8, 1 ),
                  type: 1, description: 'Описание 1', image: null, color: '#d3ec51'
                }, { title: 'Sale of NY tickets/banquets',
                  start: new Date( 2019, 10, 3 ), end: new Date( 2019, 11, 28 ),
                  type: 1, description: 'Описание 1', image: null, color: '#a6c40b'
                }, { title: 'Come party with us B2B',
                  start: new Date( 2019, 11, 29 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#d3ec51'
                }]
              }, {
                title: 'Regions',
                periods: [{ title: 'TBC',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#e7aecb'
                }]
              }]
            }, {
              id: 4, title: 'Supplier Promotion',
              events: [{
                title: 'Baltika',
                periods: [{ title: 'TBC',
                  start: new Date( 2019, 0, 1 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#e7aecb'
                }]
              }, {
                title: 'FOOD',
                periods: [{ title: 'TBC',
                  start: new Date( 2019, 4, 5 ), end: new Date( 2020, 0, 31 ),
                  type: 1, description: 'Описание 1', image: null, color: '#e7aecb'
                }]
              }]
            }]
          }],
        }, {
            title: 'COMMUNICATION',
            type: 1, history: true,
            active: true,
            blocks: [{
              id: 1, title: 'Inside 4 Walls   Market Level',
              groups: [{
                id: 1, title: 'Inside 4 Walls   Market Level',
                events: [{
                  title: 'Poster PRIMARY',
                  periods: [{start: '2019-01-01', end: '2019-1-31',
                    title: 'STACK HOUSE BURGERS (Moscow); TWISTER (Regions)',
                    type: 1, description: 'Описание 1', image: null,  color: '#ffc848'
                  }, { start: '2019-2-1', end: '2019-3-1',
                    title: 'Lunches',
                    type: 1, description: 'Описание 1', image: null,  color: '#4df21a'
                  }, { start: '2019-3-2', end: '2019-4-20',
                    title: 'New menu/Lent',
                    type: 1, description: 'Описание 1', image: null,  color: '#ff8548'
                  }, { start: '2019-4-21', end: '2019-9-31',
                    title: 'Carribean',
                    type: 1, description: 'Описание 1', image: null,  color: '#e7aecb'
                  }, { start: '2019-10-1', end: '2019-11-11',
                    title: 'Small Plates',
                    type: 1, description: 'Описание 1', image: null,  color: '#e7aecb'
                  }]
                }, {
                  title: 'Menu Insert',
                  periods: [{ start: '2019-1-1', end: '2019-1-31',
                    title: 'STACK HOUSE BURGERS (Moscow); TWISTER (Regions)',
                    type: 1, description: 'Описание 1', image: null,  color: '#ffc848'
                  }, { start: '2019-2-1', end: '2019-3-1',
                    title: 'Lunches',
                    type: 1, description: 'Описание 1', image: null,  color: '#4df21a'
                  }, { start: '2019-3-2', end: '2019-4-20',
                    title: 'New menu/Lent',
                    type: 1, description: 'Описание 1', image: null,  color: '#ff8548'
                  }, { start: '2019-4-21', end: '2019-11-11',
                    title: 'Apr 22 - Oct 5 / SUMMER DRINKS - Margaritas ',
                    type: 1, description: 'Описание 1', image: null,  color: '#ffc848'
                  }, { start: '2019-11-12', end: '2020-2-15',
                    title: 'HOT COCKTAILS',
                    type: 1, description: 'Описание 1', image: null,  color: '#d3ec51'
                  }]
                }, {
                  title: 'Bar Menu Insert',
                  periods: [{ start: '2019-6-1', end: '2019-6-24',
                    title: 'Fresh Juices (+Patrick)',
                    type: 1, description: 'Описание 1', image: null,  color: '#ffc848'
                  }]
                }]
              }]
            }]
        }, {
          title: 'FINANCIAL',
          type: 2, history: false,
          active: true,
          blocks: [{
            title: 'Показатели',
            groups: [{
              title: 'Среднее',
              inputs: [{
                title: 'Выручка НА ТОЧКУ, руб',
                value: 345522,
                periods: []
              }, {
                title: 'Чек, руб',
                value: 1257,
                periods: []
              }, {
                title: 'Чек на гостя, руб',
                value: 734,
                periods: []
              }]
            }, {
              title: 'Рост',
              inputs: [{
                value: 5,
                title: 'Выручки',
                periods: []
              }, {
                value: 2,
                title: 'Транзакций',
                periods: []
              }]
            }]
          }]
        }]
      });
      observer.complete();
    });
  }

  setCalendar(calendar: Calendar) {
    return new Observable((observer) => {
      observer.next({
        success: true
      });
    });
  }

  delCalendar(id: string) {
    return new Observable((observer) => {
      observer.next({
        success: true
      });
    });
  }

  uploadImage(image: any) {
    return new Observable((observer) => {
      observer.next({
        success: true
      });
    });
  }
}



