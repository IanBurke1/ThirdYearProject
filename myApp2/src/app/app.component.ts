/*
  Angular applications are made up of components. A component is the combination of an HTML template...
  and a component class that controls a portion of the screen called a view.
  myApp2 is the root component.
  The class interacts with the view through an API of properties and methods

*/
//Importing packages/dependencies
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

//Every component begins with an @Component decorator function that takes a metadata object.
//The metadata object describes how the HTML template and component class work together.
@Component({
  templateUrl: 'app.html' //templateUrl is a function which returns the URL of an template to be loaded and used for the directive.
})
//exporting into MyApp class..
export class MyApp {
  rootPage:any = HomePage; //Make HomePage the root (first) page 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

/*
  Ref:
  Ionic 2 crash course
  https://www.youtube.com/watch?v=O2WiI9QrS5s


*/