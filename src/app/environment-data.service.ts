import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Subject} from "rxjs";

import { Animal } from './animal';
import { ANIMALS } from './ressources/animals';
import { Plant } from './plant';
import { PLANTS } from './ressources/plants';
import {PLANTRARITY} from './ressources/rarity-levels';


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

    return of (this.countryList.sort())
  }

  getAreas() : Observable<string[]> {
    return of (this.areaList.sort())
  }

  setLocation(country : string, area : string) : void {
    this.currentCountry = country;
    this.currentArea = area;

    this.currentFauna.next([]);
    this.currentFlora.next([]);
  }

  generateRandomFlora(amount : number) : void {

    var selectedFlora : Plant[] = [];
    var workList : Animal[] = [];

    for (var a of this.plantList ) {
      if (a.countries.includes(this.currentCountry) && a.areas.includes(this.currentArea)){
        workList.push(a);
      }
    }

    if (workList.filter(plant => plant.rarity === 1).length === 0){
      this.currentFlora.next([]);
      return;
    } else if (workList.filter(plant => plant.rarity === 1).length < amount){

      //All plants for this category not enough to cover demand?
      if (workList.filter(plant => plant.rarity === 1).length+
      workList.filter(plant => plant.rarity === 2).length+
      workList.filter(plant => plant.rarity === 3).length <= amount){
        this.currentFlora.next(workList.filter(plant => plant.rarity === 1));
        return;
        //shorten list to amount of rarity 1
      } else {
        amount = workList.filter(plant => plant.rarity === 1).length;
      }
    }

    for (var _i = 0; _i < amount; _i++) {

      var rarity : number = Math.random();
      var tmp : Plant[] = [];
      var selectedPlant : Plant;
      if (rarity <= PLANTRARITY[1]){
        tmp = workList.filter(plant => plant.rarity === 1);
        selectedPlant = tmp[Math.floor(Math.random() * (tmp.length))];
        selectedFlora.push(selectedPlant);
        workList.splice(workList.indexOf(selectedPlant), 1)
      } else if (rarity <= PLANTRARITY[2]){
        tmp = workList.filter(plant => plant.rarity === 2);
        if (tmp.length !== 0){
          selectedPlant = tmp[Math.floor(Math.random() * (tmp.length))];
          selectedFlora.push(selectedPlant);
          workList.splice(workList.indexOf(selectedPlant), 1)
        } else {
          _i -= 1;
        }
      } else {
        tmp = workList.filter(plant => plant.rarity === 3);
        if (tmp.length !== 0){
          selectedPlant = tmp[Math.floor(Math.random() * (tmp.length))];
          selectedFlora.push(selectedPlant);
          workList.splice(workList.indexOf(selectedPlant), 1)
        } else {
          _i -= 1;
        }
      }

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

    if (workList.length === 0){
      this.currentFauna.next([]);
      return;
    } else if (workList.length <= amount){
      this.currentFauna.next(workList);
      return;
    }

    for (var _i = 0; _i < amount; _i++) {
      var select : number;
      select = Math.floor(Math.random() * (workList.length));
      selectedAnimals.push(workList[select]);
      workList.splice(select,1);
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
