import { Injectable } from '@angular/core';
import { M5Time } from './m5time';
import { Weather } from './Weather';
import { EnvironmentDataService }  from './environment-data.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherIcon : string;

  day : number;
  triade : number;
  moon : number;
  year : number;

  wind : number;
  clouds : number;
  rain : number;
  temp : string;

  daystorage : Object = {};

  private _envDataService : EnvironmentDataService;

  private DAYS_IN_TRIADE : number = 13;
  private TRIADES_IN_MOON : number = 2;
  private MOONS_IN_YEAR : number = 13;

  private MOONS : string[] = ["Bärenmond", "Luchsmond", "Einhornmond", "Nixenmond", "Schlangenmond", "Feenmond",
                             "Hirschmond", "Drachenmond", "Kranichmond", "Rabenmond", "Trollmond", "Draugmond", "Wolfmond"];


  setLastDay() : void {

    if (this.day !== 1){
      this.day--;
    } else{
      this.day = this.DAYS_IN_TRIADE;
      if (this.triade !== 1){
        this.triade--;
      } else {
        this.triade = this.TRIADES_IN_MOON;
        if (this.moon !== 1){
          this.moon--;
        } else {
          this.moon = this.MOONS_IN_YEAR;
          this.year--;
        }
      }
    }
  }

  setNextDay() : void {

    if (this.day !== this.DAYS_IN_TRIADE){
      this.day++;
    } else{
      this.day = 1;
      if (this.triade !== this.TRIADES_IN_MOON){
        this.triade++;
      } else {
        this.triade = 1;
        if (this.moon !== this.MOONS_IN_YEAR){
          this.moon++;
        } else {
          this.moon = 1;
          this.year++;
        }
      }
    }
  }

  getLastDay() : M5Time {

    var time = new M5Time(this.day, this.triade, this.moon, this.year);

    if (this.day !== 1){
      time.day = this.day -1;
    } else{
      time.day = this.DAYS_IN_TRIADE;
      if (this.triade !== 1){
        time.day = this.triade -1;
      } else {
        time.triade = this.TRIADES_IN_MOON;
        if (this.moon !== 1){
          time.day = this.moon -1;
        } else {
          time.moon = this.MOONS_IN_YEAR;
          time.day = this.year -1;
        }
      }
    }

    return time;
  }

  setDate(day: number, triade: number, moon: number, year: number) : void {
    this.day = day;
    this.triade = triade;
    this.moon = moon;
    this.year = year;
  }

  getMoonName() : string {
    return this.MOONS[this.moon-1];
  }

  getSeason(){
    if (this.moon < 3) {
      return 'Frühling';
    } else if (this.moon < 6) {
      return 'Sommer';
    } else if (this.moon < 9) {
      return 'Herbst';
    } else {
      return 'Winter';
    }
  }

  getDay() : number{
    return this.day;
  }

  getTriade() : number{
    return this.triade;
  }

  getMoon() : number{
    return this.moon;
  }

  getYear() : number{
    return this.year;
  }

  calculateWeather(country : string, area : string) : void{
    var country : string = this._envDataService.getCurrentCountry();
    var area : string = this._envDataService.getCurrentArea();

    var weatherzone : string;
    var lastDay : Weather;


  }

  constructor( private envDataService: EnvironmentDataService ) {
    this.day = 1;
    this.triade = 1;
    this.moon = 1;
    this.year = 1;
    this._envDataService = envDataService;
    this.calculateWeather(envDataService.getCurrentCountry(), envDataService.getCurrentArea())
  }
}
