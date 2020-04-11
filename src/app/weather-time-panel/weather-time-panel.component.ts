import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatDialog } from '@angular/material/dialog';
import { SetTimeDialogComponent } from '../set-time-dialog/set-time-dialog.component';

@Component({
  selector: 'app-weather-time-panel',
  templateUrl: './weather-time-panel.component.html',
  styleUrls: ['./weather-time-panel.component.css']
})
export class WeatherTimePanelComponent implements OnInit {

  currentWeather : string;
  _weatherService : WeatherService;

  constructor(public dialog: MatDialog, private weatherService: WeatherService) {
    this._weatherService = weatherService;

  }

  setTimeOpenDialog() : void {
    const dialogRef = this.dialog.open(SetTimeDialogComponent, {
    width: '250px',
    data: {day: this._weatherService.getDay, triade: this._weatherService.getTriade,
      moon: this._weatherService.getMoon, year: this._weatherService.getYear}
  });

  dialogRef.afterClosed().subscribe(result => {
      this._weatherService.setDate(result.day, result.triade, result.moon, result.year);
    });

  }

  setWeatherIcon() : string {
    //TODO
    return "";
  }

  setWeatherTooltip() : string {
    //TODO
    return "";
  }

  setWeatherTemperature() : string {
    //TODO
    return "";
  }

  ngOnInit() {
  }

}
