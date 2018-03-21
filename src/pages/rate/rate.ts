import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewController } from 'ionic-angular/navigation/view-controller';
/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})

export class RatePage implements OnInit{
title:string;
content:string;
isWatched:string;
rating:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
 
  }
ngOnInit(){
  const item = this.navParams.get('item');
  this.title = item.title;
  console.log(this.title)
}
  ionViewDidLoad() {

  }


save(){
  this.view.dismiss({item:{rating:this.rating,isWatched:this.isWatched}})
}
cancel(){
  this.view.dismiss()
}
}

