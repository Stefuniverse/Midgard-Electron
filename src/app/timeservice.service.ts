import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeserviceService {

  private MOONS : string[] = ["Bärenmond", "Luchsmond", "Einhornmond", "Nixenmond", "Schlangenmond", "Feenmond",
                             "Hirschmond", "Drachenmond", "Kranichmond", "Rabenmond", "Trollmond", "Draugmond", "Wolfmond"];

  constructor() { }
}
