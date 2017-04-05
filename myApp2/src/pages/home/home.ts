import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ReviewService } from '../../providers/review-service';
import { AddReview } from '../addReview/addReview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reviews: any;

  //Inject provider into constructor. Accessible from anywhere within this class
  constructor(public navCtrl: NavController, public ModalCtrl: ModalController, public reviewService: ReviewService) {

  }
  //Avoid doing work in the constructor, use ionViewDidLoad...
  //http://stackoverflow.com/questions/39869992/what-is-the-purpose-of-ionviewdidload-function
  //This triggers after the view has loaded. 
  ionViewDidLoad(){
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
  }

  addReview(){
    let modal = this.ModalCtrl.create(AddReview);
    modal.onDidDismiss(game => {
      if(game){
        this.reviews.push(game);
        this.reviewService.createReview(game);
      }
    });
    modal.present();
  }

}
