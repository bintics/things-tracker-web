import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule } from 'angularfire2';
import { FirebaseAppConfig, FirebaseAuthConfig } from './firebaseconfig';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(FirebaseAppConfig, FirebaseAuthConfig, 'Things Tracker Web'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0SOldTAJ-hat4NThIP2HayQh52i6JDaU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://github.com/angular/angularfire2/tree/master/docs