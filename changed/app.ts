import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {FirebaseService} from './lib/firebaseService';
import {ionicBootstrap} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {

}

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/

ionicBootstrap(MyApp);
