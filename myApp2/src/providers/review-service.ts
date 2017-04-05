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

@Injectable()
export class ReviewService {

  data: any;

  constructor(public http: Http) {
    console.log('Hello ReviewService Provider');
    this.data = null;
  }
  
  getReviews(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/gameReviews')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

 createReview(game){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://localhost:8080/api/gameReviews', JSON.stringify(game), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
  }

}
