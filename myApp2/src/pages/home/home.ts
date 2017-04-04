import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reviews: any = [];

  constructor(public navCtrl: NavController) {

  }
  //Avoid doing work in the constructor, use ionViewDidLoad...
  //http://stackoverflow.com/questions/39869992/what-is-the-purpose-of-ionviewdidload-function
  //This triggers after the view has loaded. 
  ionViewDidLoad(){
    this.load();
  }

  load(){
    this.reviews = [
      {title: 'Hello', summary: 'test1'},
      {title: 'Hello', summary: 'test2'},
      {title: 'Hello', summary: 'test3'}
    ];
  }

}
