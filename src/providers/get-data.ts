import { Storage } from '@ionic/storage/dist/storage';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

/*
  Generated class for the GetData provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetData {
  url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';
  numberOfJokes;

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello GetData Provider');
  }

  getData() {
    return this.http.get(this.url).map( res => res.json());
  }

}
