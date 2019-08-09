import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherIcon : string;
  temperature : number;


  constructor() { }
}
