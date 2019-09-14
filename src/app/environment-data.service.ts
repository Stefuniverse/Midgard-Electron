import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Subject} from "rxjs";

import { Animal } from './animal';
import { ANIMALS } from './ressources/animals';
import { Plant } from './plant';
import { PLANTS } from './ressources/plants';
import {PLANTRARITY, ANIMALRARITY } from './ressources/rarity-levels';


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
  private environments : Object;

  private currentFauna : Subject<Animal[]> = new Subject<Animal[]>();
  private currentFlora : Subject<Plant[]> = new Subject<Plant[]>();

  getCurrentFauna() : Observable<Animal[]> {

    return this.currentFauna.asObservable();

  }

  getCurrentFlora() : Observable<Plant[]> {

    return this.currentFlora.asObservable();

  }

  getEnvironments() : Observable<object> {

    return of (this.environments)
  }

  getAreas() : Observable<string[]> {
    return of (this.areaList.sort())
  }

  getCountries() : Observable<string[]> {
    return of (this.countryList.sort())
  }

  getCurrentCountry() : string {
    return this.currentCountry;
  }

  getCurrentArea() : string {
    return this.currentArea;
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
      if (a.countries[this.currentCountry] != null && a.countries[this.currentCountry].includes(this.currentArea)){
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
    var selectedFauna : Animal[] = [];
    var workList : Animal[] = [];

    for (var a of this.animalList ) {
      if (a.countries[this.currentCountry] != null && a.countries[this.currentCountry].includes(this.currentArea)){
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

      var rarity : number = Math.random();
      var tmp : Animal[] = [];
      var selectedAnimal : Animal;
      if (rarity <= ANIMALRARITY[1]){
        tmp = workList.filter(animal => animal.rarity === 1);
        selectedAnimal = tmp[Math.floor(Math.random() * (tmp.length))];
        selectedFauna.push(selectedAnimal);
        workList.splice(workList.indexOf(selectedAnimal), 1)
      } else if (rarity <= ANIMALRARITY[2]){
        tmp = workList.filter(animal => animal.rarity === 2);
        if (tmp.length !== 0){
          selectedAnimal = tmp[Math.floor(Math.random() * (tmp.length))];
          selectedFauna.push(selectedAnimal);
          workList.splice(workList.indexOf(selectedAnimal), 1);
        } else {
          _i -= 1;
        }
      } else if (rarity <= ANIMALRARITY[3]){
        tmp = workList.filter(animal => animal.rarity === 3);
        if (tmp.length !== 0){
          selectedAnimal = tmp[Math.floor(Math.random() * (tmp.length))];
          selectedFauna.push(selectedAnimal);
          workList.splice(workList.indexOf(selectedAnimal), 1);
        } else {
          _i -= 1;
        }
      } else {
        tmp = workList.filter(animal => animal.rarity === 4);
        if (tmp.length !== 0){
          selectedAnimal = tmp[Math.floor(Math.random() * (tmp.length))];
          selectedFauna.push(selectedAnimal);
          workList.splice(workList.indexOf(selectedAnimal), 1);
      }

    }

    this.currentFauna.next(selectedFauna);

  }
}

  constructor() {

    this.animalList = ANIMALS;
    this.plantList = PLANTS;
    this.animalSize = this.animalList.length;
    this.floraSize = this.plantList.length;
    this.areaList = [];
    this.countryList = [];
    this.environments = {};

    //serch List for countries and areas
    for (var anm of this.animalList){
      for (var country in anm.countries){
        if (!(country in this.environments)){
          this.environments[country] = anm.countries[country];
          for(var j=0; j<this.environments[country].length;j++){
            if (this.environments[country].filter(item => item == this.environments[country][j]).length !== 1){
                this.environments[country].splice(j,1);
            }
          }
          if (anm.countries[country].includes("")){
            this.environments[country].splice(this.environments[country].indexOf(""),1);
          }
        } else {
          for (var i=0; i < anm.countries[country].length;i++) {
            if(!this.environments[country].includes(anm.countries[country][i]) && anm.countries[country][i]!== ""){
              this.environments[country].push(anm.countries[country][i]);
            }
          }
        }
      }
    }

    for (var pla of this.plantList){
      for (var country in pla.countries){
        if (!(country in this.environments)){
          this.environments[country] = pla.countries[country];
          for(var j=0; j<this.environments[country].length;j++){
            if (this.environments[country].filter(item => item == this.environments[country][j]).length !== 1){
                this.environments[country].splice(j,1);
            }
          }
          if (pla.countries[country].includes("")){
            this.environments[country].splice(this.environments[country].indexOf(""),1);
          }
        } else {
          for (var i=0; i < pla.countries[country].length;i++) {
            if(!this.environments[country].includes(pla.countries[country][i]) && pla.countries[country][i]!== ""){
              this.environments[country].push(pla.countries[country][i]);
            }
          }
        }
      }
    }
  }
}
