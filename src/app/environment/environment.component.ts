import { Component, OnInit } from '@angular/core';

import { EnvironmentDataService }  from '../environment-data.service';
import { Subscription, of as observableOf } from 'rxjs';
import { Animal } from '../animal';
import { Plant } from '../plant';


@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})


export class EnvironmentComponent implements OnInit {

  selectedCountry : string;
  selectedArea : string;
  envDataS : EnvironmentDataService;
  environments : object;
  countryList : string[];
  areaList : string[];

  currentAnimals : Animal[];
  faunaSubscription: Subscription;
  floraSubscription: Subscription;

  currentPlants : Plant[];

  envChanged() : void {
    this.envDataS.setLocation( this.selectedCountry, this.selectedArea);
  }

  getColor(anm : Plant) : string {
    if (anm.rarity === 1){
      return "lightgrey";
    } else if (anm.rarity === 2){
      return "lightgreen";
    } else if (anm.rarity === 3) {
      return "lightblue";
    } else {
      return "plum";
    }
  }

  constructor(private envDataService: EnvironmentDataService) {

    this.envDataS = envDataService;
    this.selectedArea = "Stadt";
    this.selectedCountry = "Alba";
    this.faunaSubscription = envDataService.getCurrentFauna().subscribe(currentAnimals => {
      this.currentAnimals = currentAnimals;
    });

    this.floraSubscription = envDataService.getCurrentFlora().subscribe(currentPlants => {
      this.currentPlants = currentPlants;
    });

      envDataService.getEnvironments().subscribe(envs => {
        this.environments = envs;
        this.countryList = Object.keys(this.environments);
      });

  }

  ngOnInit() {

  }

}
