import {App, Platform, ionicBootstrap} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {HomePage} from "./pages/home/home";
import {Component} from "@angular/core";
import * as firebase from 'firebase';
import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2";

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {}
})

class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(private app: App, private platform: Platform) {
     const
            fbConf = {
            apiKey: "AIzaSyCFASbhw6YdCz2CImpWhnMPrbF5ZSNmlN8",
            authDomain: "flochat-b370d.firebaseapp.com",
            databaseURL: "https://flochat-b370d.firebaseio.com",
            storageBucket: "flochat-b370d.appspot.com",
        };
    firebase.initializeApp(config);
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn"t want the back button to show in this scenario
    let nav = this.app.getComponent("nav");
    nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [FIREBASE_PROVIDERS, defaultFirebase("https://ionic2-angularfire-login.firebaseio.com/")], {

});
