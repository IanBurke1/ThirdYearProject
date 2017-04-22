//Importing packages/dependencies
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
 //The @Component decorator provides the Angular metadata for the component.
@Component({
  selector: 'page-addReview', //selector is a CSS component that will match the element tag that identifies this component within a parent components template.
  templateUrl: 'addReview.html' //Referencing html template.
})
export class AddReview {

    //data properties set to any data
    name: any;
    platform: any;
    review: any;
    rating: any;
 
  constructor(public viewCtrl: ViewController) {
    //ViewController used to access various features and information about the current view/screen.
  }

//When save function is called it passes the data into properties and returns the properties back to homepage.
  save(): void {
// let is a new type of variable similar to var
// Explained https://www.typescriptlang.org/docs/handbook/variable-declarations.html
      let game = 
      { 
          name: this.name, 
          platform: this.platform, 
          review: this.review,
          rating: this.rating
      };
      //Closing the model. parameter game contains data to return to homepage when viewController is dismissed.
      this.viewCtrl.dismiss(game);
  }
  //When close function is called.. view controller is dismissed. In other words the view/page is closed down.
  close(): void {
    this.viewCtrl.dismiss();
  }
  
}