import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnvironmentComponent } from './environment/environment.component';
import { StatusOverviewComponent } from './status-overview/status-overview.component';
import { EventviewerComponent } from './eventviewer/eventviewer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WeatherTimePanelComponent } from './weather-time-panel/weather-time-panel.component';
import { EnvGenerateRandomDialogComponent } from './env-generate-random-dialog/env-generate-random-dialog.component';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FeatherModule } from 'angular-feather';
import { Sun, CloudRain, CloudSnow, Cloud, CloudLightning } from 'angular-feather/icons';
import { SetTimeDialogComponent } from './set-time-dialog/set-time-dialog.component';

const icons = {
  Sun,
  CloudRain,
  CloudSnow,
  Cloud,
  CloudLightning
};

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    StatusOverviewComponent,
    EventviewerComponent,
    ToolbarComponent,
    EnvGenerateRandomDialogComponent,
    WeatherTimePanelComponent,
    SetTimeDialogComponent
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
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule,
    FeatherModule.pick(icons)

    //AppRoutingModule
  ],
  exports: [
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EnvGenerateRandomDialogComponent, SetTimeDialogComponent]
})
export class AppModule { }
