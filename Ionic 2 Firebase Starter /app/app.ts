import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {FirebaseService} from './lib/firebaseService';
import {ionicBootstrap} from 'ionic-angular';
import {Component} from '@angular/core';
import {HomePage} from './pages/home/home';
import {Data} from './providers/data/data';
import * as firebase from 'firebase';

@Component({
    providers: [Data],
    template: '<ion-nav [root]="rootPage"></ion-nav>',
})

export class MyApp {
    rootPage: any = HomePage;

    constructor(platform: Platform) {
        const
            fbConf = {
            apiKey: "AIzaSyCFASbhw6YdCz2CImpWhnMPrbF5ZSNmlN8",
            authDomain: "flochat-b370d.firebaseapp.com",
            databaseURL: "https://flochat-b370d.firebaseio.com",
            storageBucket: "flochat-b370d.appspot.com",
        };
        firebase.initializeApp(fbConf);

        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
    }
ionicBootstrap(MyApp);
