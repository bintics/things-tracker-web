import { NgModule } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseAppConfig = {
  apiKey: 'AIzaSyDko5N8L1zPedXHO2Qo2KUW2ByVY995G8s',
  authDomain: 'traking-suit.firebaseapp.com',
  databaseURL: 'https://traking-suit.firebaseio.com',
  storageBucket: 'traking-suit.appspot.com',
  messagingSenderId: '912699957798'
};

export const FirebaseAuthConfig = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password
}