import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Subject} from "rxjs";

import { Animal } from './animal';
import { ANIMALS } from './ressources/animals';
import { Plant } from './plant';
import { PLANTS } from './ressources/plants';


@Injectable({
  providedIn: 'root'
})

export class EnvironmentDataService {

  animalList : Animal[];
  animalSize : number;
  plantList : Plant[];
  floraSize : number;

  areaList : string[];
  countryList : string[];

  private currentCountry : string = "Alba";
  private currentArea : string = "Stadt";

  private currentFauna : Subject<Animal[]> = new Subject<Animal[]>();
  private currentFlora : Subject<Plant[]> = new Subject<Plant[]>();

  getCurrentFauna() : Observable<Animal[]> {

    return this.currentFauna.asObservable();

  }

  getCurrentFlora() : Observable<Plant[]> {

    return this.currentFlora.asObservable();

  }

  getCountries() : Observable<string[]> {

    return of (this.countryList)
  }

  getAreas() : Observable<string[]> {
    return of (this.areaList)
  }

  setLocation(country : string, area : string) : void {
    this.currentCountry = country;
    this.currentArea = area;

    this.currentFauna.next([]);
  }

  generateRandomFlora(amount : number) : void {

    var selectedFlora : Plant[] = [];
    var workList : Animal[] = [];

    for (var a of this.plantList ) {
      if (a.countries.includes(this.currentCountry) && a.areas.includes(this.currentArea)){
        workList.push(a);
      }
    }

    for (var _i = 0; _i < amount; _i++) {
    selectedFlora.push(workList[Math.floor(Math.random() * (workList.length))]);
    }

    this.currentFlora.next(selectedFlora);
  }

  generateRandomFauna(amount : number) : void {
    var selectedAnimals : Animal[] = [];
    var workList : Animal[] = [];

    for (var a of this.animalList ) {
      if (a.countries.includes(this.currentCountry) && a.areas.includes(this.currentArea)){
        workList.push(a);
      }
    }

    for (var _i = 0; _i < amount; _i++) {
    selectedAnimals.push(workList[Math.floor(Math.random() * (workList.length))]);
    }

    this.currentFauna.next(selectedAnimals);

  }

  constructor() {

    this.animalList = ANIMALS;
    this.plantList = PLANTS;
    this.animalSize = this.animalList.length;
    this.floraSize = this.plantList.length;
    this.areaList = [];
    this.countryList = [];

    //serch List for countries
    for (var anm of this.animalList){

      for (var area of anm.areas){
        if (!this.areaList.includes(area)){
          this.areaList.push(area);
        }

      }

      for (var country of anm.countries){
        if (!this.countryList.includes(country)){
          this.countryList.push(country);
        }

      }

    }

    for (var anm of this.plantList){

      for (var area of anm.areas){
        if (!this.areaList.includes(area)){
          this.areaList.push(area);
        }

      }

      for (var country of anm.countries){
        if (!this.countryList.includes(country)){
          this.countryList.push(country);
        }

      }

    }

  }

}
