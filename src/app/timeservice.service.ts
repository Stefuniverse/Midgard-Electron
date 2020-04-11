import { Injectable } from '@angular/core';
import { M5Date } from './m5_date';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _currentTime : M5Date;


  constructor() {

    this._currentTime = new M5Date(7, 2, 8, 2400);

  }

  getTime() : M5Date {
    return this._currentTime;
  }


}
