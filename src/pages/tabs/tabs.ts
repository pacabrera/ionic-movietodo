import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasPage } from '../ideas/ideas';
import { MoviesPage } from '../movies/movies';
import { DataService } from '../service/dataService';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  idea:any = IdeasPage;
  movies:any = MoviesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  refresh(){
    this.service.getData();
  }

}
