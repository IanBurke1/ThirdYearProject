import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReviewService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
//How to generate a service/provider..
//https://ionicframework.com/docs/cli/generate/

//Reference: https://www.youtube.com/watch?v=ARkSm0KWHaE

/*
  Angular's Dependency Injection explained: https://angular.io/docs/ts/latest/guide/dependency-injection.html
*/
@Injectable() //This marks a class as available to an injector for instantiation.
export class ReviewService {

  //data property set to any type.
  data: any;
  //using HTTP to make requests
  constructor(public http: Http) {
    console.log('Hello ReviewService Provider');
    this.data = null;
  }

  //Reference: https://www.joshmorony.com/building-a-review-app-with-ionic-2-mongodb-node/
  //This method with retrieve all the reviews from the database through the server
  getReviews(){
    if(this.data){
      //Promise is an object used for asynchronous operations. It represents a value such as data..
      //which may be available now,or in the future or never. Its a proxy for a value such as data. 
      return Promise.resolve(this.data);
    }
    //creates new promise returning the reviews 
    return new Promise(resolve => { //=> indicates which is the return type
      this.http.get('http://localhost:8080/api/gameReviews')
      .map(res => res.json()) //maps out json data
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

//This method passes game which is the review and posts it using http to the server into the database
 createReview(game){
    //Allow the ionic and ther server to pass reviews
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Post request to server. Converts game information to json . 
    this.http.post('http://localhost:8080/api/gameReviews', JSON.stringify(game), {headers: headers})
      .subscribe(res => { 
        console.log(res.json());
      });
  }
  //This method deletes a review using DELETE request. deletes review by its document _id
  deleteReview(id){
    this.http.delete('http://localhost:8080/api/gameReviews' + id).subscribe((res) => { console.log(res.json());
    });
  }

  

}
