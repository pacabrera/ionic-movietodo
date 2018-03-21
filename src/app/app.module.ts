import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewideaPage } from '../pages/newidea/newidea';
import { IdeasPage } from '../pages/ideas/ideas';
import {HttpModule}  from'@angular/http'
import { DataService } from '../pages/service/dataService';
import { EditPage } from '../pages/edit/edit';
import { RatePage } from '../pages/rate/rate';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MoviesPage } from '../pages/movies/movies';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewideaPage,
    IdeasPage,
    EditPage,
     RatePage,
     HomePage,
     AboutPage,
     MoviesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NewideaPage,
    IdeasPage,
    EditPage,
    RatePage,
    HomePage,
    AboutPage,
    MoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
