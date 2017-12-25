import { Storage } from '@ionic/storage/dist/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  numberJokes = 5;
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage.get('numberOfJokes').then((val) => {
      if (val != null) {
        this.numberJokes = val;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

  ionViewWillEnter(){
    this.storage.get('numberOfJokes').then((val) => {
      if (val != null) {
        this.numberJokes = val;
      }
    })
  }

  saveChange() {
    this.storage.set('numberOfJokes', this.numberJokes).catch((reason) => {
      console.log(reason);
    })
    window.alert("Saved")
  }
}
