import { Component, OnInit } from '@angular/core';
import { TimeService } from '../timeservice.service'

@Component({
  selector: 'app-weather-time-panel',
  templateUrl: './weather-time-panel.component.html',
  styleUrls: ['./weather-time-panel.component.css']
})
export class WeatherTimePanelComponent implements OnInit {

  currentWeather : string;
  _timeService;

  constructor(private timeService: TimeService) {
    this._timeService = timeService;

  }

  setTime() : void{
    //TODO
  }

  ngOnInit() {
  }

}
