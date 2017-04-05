import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-addReview',
  templateUrl: 'addReview.html'
})
export class AddReview {

    //data properties set to any data
    name: any;
    platform: any;
    review: any;
    rating: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }

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
      //Closing the model
      this.viewCtrl.dismiss(game);
  }
  close(): void {
    this.viewCtrl.dismiss();
  }
  
}