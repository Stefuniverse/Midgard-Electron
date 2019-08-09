export class M5Time {
  day : number;
  triade : number;
  moon : number;
  year : number;

  private DAYS_IN_TRIADE : number = 13;
  private TRIADES_IN_MOON : number = 2;
  private MOONS_IN_YEAR : number = 13;

  private MOONS : string[] = ["Bärenmond", "Luchsmond", "Einhornmond", "Nixenmond", "Schlangenmond", "Feenmond",
                             "Hirschmond", "Drachenmond", "Kranichmond", "Rabenmond", "Trollmond", "Draugmond", "Wolfmond"];

  nextDay() : void {
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

  lastDay() : void {
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

  constructor(day: number, triade: number, moon: number, year: number) {
    this.day = day;
    this.triade = triade;
    this.moon = moon;
    this.year = year;
  }
}
