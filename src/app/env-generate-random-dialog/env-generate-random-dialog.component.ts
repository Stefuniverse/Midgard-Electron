import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EnvDialogData} from '../env-dialog-data';

@Component({
  selector: 'app-env-generate-random-dialog',
  templateUrl: './env-generate-random-dialog.component.html',
  styleUrls: ['./env-generate-random-dialog.component.css']
})
export class EnvGenerateRandomDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EnvGenerateRandomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EnvDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}
