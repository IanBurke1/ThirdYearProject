import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ReviewService } from '../../providers/review-service';
import { AddReview } from '../addReview/addReview';

//The @Component decorator provides the Angular metadata for the component.
@Component({
  selector: 'page-home', //selector is a CSS component that will match the element tag that identifies this component within a parent components template.
  templateUrl: 'home.html'  //Referencing html template.
})
export class HomePage {
//Creating reviews variable to pass in data from reviewService
  reviews: any;
  searchQuery: string = '';

  //Inject provider into constructor. Accessible from anywhere within this class
  constructor(public navCtrl: NavController, public ModalCtrl: ModalController, public reviewService: ReviewService) {
   // this.initializeItems();
  }
  
  initializeItems(){
       this.reviews;
  }

    //Reference: https://ionicframework.com/docs/components/#searchbar
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
  //This triggers after the view has loaded. Basically once the homepage is loaded.. the reviewService calls for all..
  //the reviews from database and stores them into reviews where they are loaded on the screen in a list
  ionViewDidLoad(){
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
  }
  //once the user created a review.. pass it to homepage where the reviewService Provider sends it to server to be processed into the database.
  addReview(){
    let modal = this.ModalCtrl.create(AddReview);
    //Once the review is created on the addReview page and dismissed.. 
    modal.onDidDismiss(game => {
      if(game){
        this.reviews.push(game); //add data to local array so that it displays right away 
        this.reviewService.createReview(game);
      }
    });
    modal.present(); 
  }
//When user deletes a review.. 
  deleteReview(game){
    //Index of the reviews array  
    let index = this.reviews.indexOf(game); 
    if(index > -1){ 
      this.reviews.splice(index, 1); //splice() method changes the reviews of the array..removing elements
    }
    this.reviewService.deleteReview(game._id); //The provider takes care of the rest in the database
  }

} //End of Class
