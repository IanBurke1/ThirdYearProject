import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddReview } from '../pages/addReview/addReview';
import { HomePage } from '../pages/home/home';
import { ReviewService } from '../providers/review-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/*
  App.module.ts is basically where you bring in all other components and add them to ngModule
  Angular2 requires every single app to have a ngModule declaration
  Every app has a root module that controls the rest of the application. 

  
*/
//NgModules help organise an application into cohesive blocks of functionality.
//@ngModule takes a metadata object that tells angular how to compile and run module code.
//It identifies the module's own components, directives and pipes making some of them public so..
//external components can use them.
@NgModule({
  //declare which components, directives and pipes belong to the module.
  declarations: [
    MyApp,
    AddReview,
    HomePage
  ],
  imports: [ //import ionicModule so all of ionic can run
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp], //bootstrap the app using ionic bootstrap
  entryComponents: [ //an entry component is an component that angular loads impertively by type
    MyApp,
    AddReview,
    HomePage
  ],
  //Add service providers to the application dependency injectors. A component loaded declaratively via its selector is NOT an entry component.
  providers: [
    ReviewService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
//export appModule
export class AppModule {}
