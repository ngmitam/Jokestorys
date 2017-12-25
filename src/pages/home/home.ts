import { Storage } from '@ionic/storage/dist/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetData } from "../../providers/get-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numberJokes = 5;
  Jokes: [any]

  constructor(public navCtrl: NavController, private data: GetData, private storage: Storage) {
    this.storage.get('numberOfJokes').then((val) => {
      if (val != null) {
        this.numberJokes = val;
      }
    })
    this.refresh();
  }

  refresh() {
    this.data.getData().subscribe(data => {
      this.Jokes = data;
      for (var i = 10; i > this.numberJokes; --i) {
        this.Jokes.pop();
      }
    })
  }

  ionViewWillEnter(){
    this.storage.get('numberOfJokes').then((val) => {
      if (val != null) {
        this.numberJokes = val;
      }
    })
    this.refresh();
  }

  doRefresh(event) {
    console.log('Begin async operation', event);

    this.refresh();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

}
