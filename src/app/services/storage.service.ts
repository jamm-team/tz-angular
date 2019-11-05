import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getItem(key) {
    return localStorage.getItem('calendar_' + key);
  }

  setItem(key, data) {
    localStorage.setItem('calendar_' + key, data);
  }

  remove(key) {
    localStorage.removeItem('calendar_' + key);
  }

  removeByPrefix(key) {
    key = 'calendar_' + key;
    for (const i in localStorage) {
      if (i.substring(0, key.length) === key) {
        localStorage.removeItem(i);
      }
    }
  }

  setObject(key, data) {
    this.setItem(key, JSON.stringify(data));
  }

  getObject(key) {
    const result = this.getItem(key);

    try {
      return JSON.parse(result);
    } catch (e) {
      return null;
    }
  }

  clear() {
    localStorage.clear();
  }
}
