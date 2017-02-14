import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Gmap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gmap',
  templateUrl: 'gmap.html'
})
export class GmapPage {

  item: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GmapPage');
  }

}
