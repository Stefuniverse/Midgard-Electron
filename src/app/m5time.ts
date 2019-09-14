export class M5Time {
  day : number;
  triade : number;
  moon : number;
  year : number;

  constructor(day: number, triade: number, moon: number, year: number) {
    this.day = day;
    this.triade = triade;
    this.moon = moon;
    this.year = year;
  }

  toString() : string {
    return this.day+"/"+this.triade+"/"+this.moon+"/"+this.year
  }
  
}
