import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../service/dataService';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EditPage } from '../edit/edit';
import { RatePage } from '../rate/rate';


/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
ideas:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:DataService,
  private load:LoadingController,private model:ModalController) {
  }
  ionViewWillEnter(){
    const l = this.load.create({
      content:"Movies Loading ..."
    })
    l.present()
    this.service.getData().subscribe(data=>{
       this.ideas = data
  
        l.dismiss()
      
     
    })
  }

delete(index){
  
   this.service.removeIdea(this.ideas[index]._id).subscribe((res)=>{
    this.service.getData().subscribe(data=>{
      this.ideas = data
    })
   
})
}
edit(index){
  const title = this.ideas[index].title;
  const content = this.ideas[index].content;
  const id = this.ideas[index]._id;
  const genre = this.ideas[index]._genre
const modal = this.model.create(EditPage,{item:{title:title,content:content,genre:genre}})

modal.present()

modal.onDidDismiss(data=>{
  if(data){
  console.log(data.item.title,data.item.content,data.item.genre)
  this.service.editIdea(id,data.item.title,data.item.content,data.item.genre).subscribe((res)=>{
    this.service.getData().subscribe(data=>{
      this.ideas = data
    })
  })
}
else{
  console.log('closed')
}
})
  
}

rate(index){
  const isWatched = this.ideas[index].isWatched;
  const id = this.ideas[index]._id
  const rating = this.ideas[index].rating;
const modal = this.model.create(RatePage,{item:{isWatched:isWatched,rating:rating}})

modal.present()

modal.onDidDismiss(data=>{
  if(data){
  console.log(data.item.isWatched)
  this.service.rateIdea(id,data.item.isWatched,data.item.rating).subscribe((res)=>{
    this.service.getData().subscribe(data=>{
      this.ideas = data
    })
  })
}
else{
  console.log('closed')
}
})
  
}
}
