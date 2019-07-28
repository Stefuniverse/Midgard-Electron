import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnvGenerateRandomDialogComponent } from '../env-generate-random-dialog/env-generate-random-dialog.component';
import { EnvironmentDataService } from '../environment-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  envDataS : EnvironmentDataService;
  floraAmount : number
  faunaAmount : number
  constructor(public dialog: MatDialog, private envDataService: EnvironmentDataService) {

    this.envDataS = envDataService;
  }

  ngOnInit() {
  }

  generateFaunaOpenDialog() : void {
    const dialogRef = this.dialog.open(EnvGenerateRandomDialogComponent, {
    width: '250px',
    data: {what: 'Fauna', amount: this.faunaAmount}
  });

  dialogRef.afterClosed().subscribe(result => {
      this.floraAmount = result;
      this.envDataS.generateRandomFauna(result);
    });

  }

  generateFloraOpenDialog() : void {
    const dialogRef = this.dialog.open(EnvGenerateRandomDialogComponent, {
    width: '250px',
    data: {what: 'Flora', amount: this.floraAmount}
  });

  dialogRef.afterClosed().subscribe(result => {
      this.floraAmount = result;
      this.envDataS.generateRandomFlora(result);
    });

  }

}
