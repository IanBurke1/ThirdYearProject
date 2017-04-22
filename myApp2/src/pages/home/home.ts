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
  searchQuery: string = '';

  //Inject provider into constructor. Accessible from anywhere within this class
  constructor(public navCtrl: NavController, public ModalCtrl: ModalController, public reviewService: ReviewService) {
   // this.initializeItems();
  }
  
  initializeItems(){
       this.reviews;
  }

   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.reviews = this.reviews.filter((game) => {
        return (game.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  } //End of getItems



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

  deleteReview(game){
    let index = this.reviews.indexOf(game);
    if(index > -1){
      this.reviews.splice(index, 1);
    }
    this.reviewService.deleteReview(game._id);
  }

} //End of Class
