import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TimeData} from '../setTimeData';

@Component({
  selector: 'app-set-time-dialog',
  templateUrl: './set-time-dialog.component.html',
  styleUrls: ['./set-time-dialog.component.css']
})
export class SetTimeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SetTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TimeData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
