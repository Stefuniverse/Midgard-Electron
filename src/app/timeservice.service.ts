import { Injectable } from '@angular/core';
import { M5Time } from './m5time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _currentTime : M5Time;
  

  constructor() {

    this._currentTime = new M5Time(7, 2, 8, 2400);

  }

  getTime() : M5Time {
    return this._currentTime;
  }


}
