import { Component, OnInit } from '@angular/core';

import { EnvironmentDataService }  from '../environment-data.service';
import { Subscription } from 'rxjs';
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
  countryList : string[];
  areaList : string[];

  currentAnimals : Animal[];
  faunaSubscription: Subscription;
  floraSubscription: Subscription;

  currentPlants : Plant[];

  envChanged() : void {
    this.envDataS.setLocation( this.selectedCountry, this.selectedArea);
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

      envDataService.getCurrentFlora().subscribe(currentPlants => this.currentPlants = currentPlants);
      envDataService.getAreas().subscribe(areas => this.areaList = areas);
      envDataService.getCountries().subscribe(countries => this.countryList = countries);

  }

  ngOnInit() {

  }

}
