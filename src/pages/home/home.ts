import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { GmapPage } from '../gmap/gmap';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items: any[];

  random_places: [
    ['Moscow1', 55.822083, 37.665453, 4],
    ['Moscow2', 55.604697, 37.642107, 4],
    ['Lisbon1', 38.749402, -9.120034, 4],
    ['Lisbon2', 38.708960, -9.169130, 4],
    ['NewYork1', 40.784513, -73.976630, 4],
    ['NewYork2', 40.707522, -74.037055, 4],
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
  ];
  constructor(public navCtrl: NavController) {
  	this.items = [];
  	for(let i = 0; i < 10; i++) {
  		this.items.push({
  			text: this.getPlaces(i),
  			id: i
  		}); 
  	}
  }

  getPlaces(i) {
    var map = new Object(); // or var map = {};
    map = {
      text: "place " + i,
      id: "p" + i
    };
    console.log(map);
    return map;
  }

  getMyPlaces(i) {
    var map = new Object(); // or var map = {};
    map[i] = {
      text: "place " + i,
      id: "p" + i
    };
    console.log(map);
    return map;
  }

  itemSelected(item) {
  	//alert(item.text);
  	this.navCtrl.push(GmapPage, {
  		item: item.text
  	});
  }
 
}
