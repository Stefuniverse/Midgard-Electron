import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnvironmentComponent } from './environment/environment.component';
import { StatusOverviewComponent } from './status-overview/status-overview.component';
import { EventviewerComponent } from './eventviewer/eventviewer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { EnvGenerateRandomDialogComponent } from './env-generate-random-dialog/env-generate-random-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    StatusOverviewComponent,
    EventviewerComponent,
    ToolbarComponent,
    EnvGenerateRandomDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule

    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EnvGenerateRandomDialogComponent]
})
export class AppModule { }