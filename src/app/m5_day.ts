import { M5Date } from './m5_date'
import { M5Weather } from './m5_weather'

export class M5Day {

  date : M5Date;
  weather : Object;


  set_weather(zone : string, weather : M5Weather) : void {
    this.weather[zone] = weather;
  }

  get_weather(zone: string) : M5Weather {
    return this.weather[zone];
  }

}
