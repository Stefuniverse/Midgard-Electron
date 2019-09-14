import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-weather-time-panel',
  templateUrl: './weather-time-panel.component.html',
  styleUrls: ['./weather-time-panel.component.css']
})
export class WeatherTimePanelComponent implements OnInit {

  currentWeather : string;
  _weatherService : WeatherService;

  constructor(private weatherService: WeatherService) {
    this._weatherService = weatherService;

  }

  setTime() : void{
    //TODO
  }

  ngOnInit() {
  }

}
