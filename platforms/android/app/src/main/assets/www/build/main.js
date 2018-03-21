webpackJsonp([8],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\about\about.html"*/'<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ABOUT</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #083f57;">\n\n<ion-grid style="background-color: white; opacity: 0.5">\n  <ion-row align-items-start>\n    <ion-col>\n      <img src="assets/imgs/logos.png">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid style="background-color: white;">\n  <ion-row align-items-start>\n    <ion-col>\n       <p style="font-family: roboto;">This app is all about scheduling movie you want to watch, you can take it down what movie list you want to watch. Works the way schedulers think, with tools that provide increased flexibility and versatility in the way schedules can be created and viewed. </p> <br>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- OUR TEAM -->\n\n<br>\n\n\n<ion-grid style="background-color: white" padding="4">\n    <h5 style="text-align:center; font-family: roboto;">OUR TEAM</h5>\n\n  <ion-row align-items-start>\n    <ion-col>\n    </ion-col>\n       <ion-col>\n      <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/pol.jpg">\n    </ion-avatar>\n    <h2>Paul Cabrera</h2>\n    <h3>Back end programmer</h3>\n  </ion-item>\n</ion-list>\n    </ion-col>\n    <ion-col>\n       <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/me.jpg">\n    </ion-avatar>\n    <h2>Renzo Candelaria</h2>\n    <h3>Front end designer</h3>\n  </ion-item>\n</ion-list>\n    </ion-col>\n    <ion-col>\n     <br><br><br>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-center>\n    <ion-col>\n\n    </ion-col>\n    <ion-col>\n      <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/boss.jpg">\n    </ion-avatar>\n    <h2>Odeleon Banania</h2>\n    <h3>Mobile Developer</h3>\n  </ion-item>\n</ion-list>\n    </ion-col>\n    <ion-col>\n      <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/lowe.jpg">\n    </ion-avatar>\n    <h2>Loowee Ponce</h2>\n    <h3>App Developer</h3>\n  </ion-item>\n</ion-list>\n    </ion-col>\n    <ion-col>\n     <br><br><br>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid>\n  <p style="text-align: center;"> Facebook | Instagram | Twitter | Tumblr </p>\n</ion-grid>\n</ion-content>\n\n<ion-footer  style ="text-align: center">\n      <ion-toolbar>\n        <div> All Rights Reserved | Design by Autistic</div> \n\n      </ion-toolbar>\n    </ion-footer>  \n\n\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\home\home.html"*/'<style>\n \n h1:hover{\n    color:#000;\n    background-color:#80f7f7;\n}\n\n  .wh{\n    background-color: #bef4e3; \n    padding: 5px; \n    width: 900px;\n  }\n\n  .grid1{\n    background-color: white;\n    opacity: 0.8\n  }\n\n  .grid2{\n    background-color: white;\n  }\n\n  .row1{\n    background-color: white;\n  }\n  \n#container{\n  width:1000px;\n  margin-left:auto;\n  margin-right:auto;\n  background-color:white; \n  border-radius:10px;\n}\n\n\n#content ul{\n  list-style-type:none;\n}\n\n#content img{\n  -webkit-webkit-transition:all is ease;\n  -moz-webkit-transition:all is ease;\n  -ms-webkit-transition:all is ease;\n  -o-webkit-transition:all is ease;\n  transition:all is ease;\n  filter:blur(3px);\n  -webkit-filter: blur(3px);\n  -moz-filter: blur(3px);\n  -ms-filter: blur(3px);\n  -o-filter: blur(3px);\n}\n\n#content img:hover{\n  -webkit-webkit-transition:all is ease;\n  -moz-webkit-transition:all is ease;\n  -ms-webkit-transition:all is ease;\n  -o-webkit-transition:all is ease;\n  transition:all is ease;\n  filter:blur(0px);\n  -webkit-filter: blur(0px);\n  -moz-filter: blur(0px);\n  -ms-filter: blur(0px);\n  -o-filter: blur(0px);\n  transform:translateZ(25px) rotate(3deg);\n  border:1px solid #000000;\n  box-shadow:10px 10px 10px rgba(0,0,.5);\n}\n\n</style>\n<ion-header padding>\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>POPULAR</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #083f57;">\n\n\n<ion-slides pager style="background-color: white;">\n<ion-slide>\n  <img src="../assets/imgs/ironman.jpg" height="500" width="500">\n</ion-slide>\n<ion-slide>\n  <img src="../assets/imgs/bp.jpg" height="500" width="500">\n</ion-slide>\n<ion-slide>\n  <img src="../assets/imgs/CACW.jpg" height="500" width="500">\n</ion-slide>\n<ion-slide>\n  <img src="../assets/imgs/thor.jpg" height="500" width="500">\n</ion-slide>\n<ion-slide><img src="../assets/imgs/GOTG.jpg" height="500" width="500"></ion-slide>\n</ion-slides>\n\n<br>\n\n<ion-grid class="grid1" padding="4">\n  <h5 style="text-align: center;">COMING SOON</h5><br>\n\n  <ion-row style="padding: 1em;" id="content">\n   \n    <ion-col col-4 col-sm padding="5px" >\n      <img src="assets/imgs/iw.jpeg" width="100px" height="100px"> <br> <p style="font-size: 65%">Avengers: Infinity War</p>\n    </ion-col>\n\n    <ion-col col-4 col-sm padding="5px">\n     <img src="assets/imgs/o8.jpg" width="100px" height="100px"> <br> <p style="font-size: 65%; text-align: center;">Ocean\'s 8</p>\n    </ion-col>\n    <ion-col col-4 col-sm padding="5px">\n       <img src="assets/imgs/dp.jpg" width="100px" height="100px"> <br> <p style="font-size: 65%">Deadpool 2</p>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>  \n\n<br>\n  \n<ion-grid class="grid2" padding="4">\n    <h5 style="text-align: center;">POPULAR IN THIS MONTH</h5><br>\n\n  <ion-row  style="padding: 1em;">\n    <ion-col col-4 col-sm>\n        <img src="assets/imgs/bpn.jpg" width="100px" height="100px">\n        <img src="assets/imgs/thorr.jpg" width="100px" height="100px">\n        <img src="assets/imgs/dd.jpg" width="100px" height="100px">\n    </ion-col>\n    <ion-col col-4 col-sm >\n        <img src="assets/imgs/tr.jpg" width="100px" height="100px">\n        <img src="assets/imgs/ins.jpg" width="100px" height="100px">\n        <img src="assets/imgs/sw.jpg" width="100px" height="100px">\n    </ion-col>\n    <ion-col col-4 col-sm >\n        <img src="assets/imgs/jmj.jpg" width="100px" height="100px">\n        <img src="assets/imgs/em.jpg" width="100px" height="100px">\n        <img src="assets/imgs/dw.jpg" width="100px" height="100px">\n    </ion-col>\n  </ion-row> \n</ion-grid>\n\n</ion-content>\n\n<ion-footer  style ="text-align: center">\n      <ion-toolbar>\n        <div > All Rights Reserved | Design by Autistic</div> \n      </ion-toolbar>\n    </ion-footer>  \n\n\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dataService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rate_rate__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdeasPage = (function () {
    function IdeasPage(navCtrl, navParams, service, load, model) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.load = load;
        this.model = model;
        this.ideas = [];
    }
    IdeasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var l = this.load.create({
            content: "Movies Loading ..."
        });
        l.present();
        this.service.getWatched().subscribe(function (data) {
            _this.ideas = data;
            l.dismiss();
        });
    };
    IdeasPage.prototype.delete = function (index) {
        var _this = this;
        this.service.removeIdea(this.ideas[index]._id).subscribe(function (res) {
            _this.service.getWatched().subscribe(function (data) {
                _this.ideas = data;
            });
        });
    };
    IdeasPage.prototype.edit = function (index) {
        var _this = this;
        var title = this.ideas[index].title;
        var content = this.ideas[index].content;
        var id = this.ideas[index]._id;
        var genre = this.ideas[index]._genre;
        var modal = this.model.create(__WEBPACK_IMPORTED_MODULE_5__edit_edit__["a" /* EditPage */], { item: { title: title, content: content, genre: genre } });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data.item.title, data.item.content, data.item.genre);
                _this.service.editIdea(id, data.item.title, data.item.content, data.item.genre).subscribe(function (res) {
                    _this.service.getWatched().subscribe(function (data) {
                        _this.ideas = data;
                    });
                });
            }
            else {
                console.log('closed');
            }
        });
    };
    IdeasPage.prototype.rate = function (index) {
        var _this = this;
        var isWatched = this.ideas[index].isWatched;
        var id = this.ideas[index]._id;
        var rating = this.ideas[index].rating;
        var modal = this.model.create(__WEBPACK_IMPORTED_MODULE_6__rate_rate__["a" /* RatePage */], { item: { isWatched: isWatched, rating: rating } });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data.item.isWatched);
                _this.service.rateIdea(id, data.item.isWatched, data.item.rating).subscribe(function (res) {
                    _this.service.getWatched().subscribe(function (data) {
                        _this.ideas = data;
                    });
                });
            }
            else {
                console.log('closed');
            }
        });
    };
    IdeasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ideas',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\ideas\ideas.html"*/'<!--\n  Generated template for the IdeasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Movie List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #083f57;">\n  <ion-item *ngFor="let idea of ideas;let i = index" >\n    <ion-card>\n      <ion-card-header>\n          <ion-item text-wrap>\n            <strong style="font-size: 20pt">{{idea.title}}</strong>\n            <div class="hr" style="border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;"> </div>\n            </ion-item>\n      </ion-card-header>\n      <ion-card-content>             \n        <ion-item text-wrap>\n        <strong>Synopsis:</strong><br/>{{idea.content}}\n        </ion-item>\n      </ion-card-content>\n    <ion-card-content>\n       <ion-item text-wrap>\n        <strong>Genre/s:</strong>{{idea.genre}}\n        </ion-item>\n      </ion-card-content>\n              <button float-right icon-only ion-button (click)="rate(i)">\n        <ion-icon name="checkmark"></ion-icon>\n                </button>\n      <button float-right icon-only ion-button  (click)="edit(i)">\n        <ion-icon name="create"></ion-icon>\n                </button>\n        <button float-right ion-button  (click)="delete(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n     \n    </ion-card>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\ideas\ideas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], IdeasPage);
    return IdeasPage;
}());

//# sourceMappingURL=ideas.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dataService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rate_rate__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoviesPage = (function () {
    function MoviesPage(navCtrl, navParams, service, load, model) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.load = load;
        this.model = model;
        this.ideas = [];
    }
    MoviesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var l = this.load.create({
            content: "Movies Loading ..."
        });
        l.present();
        this.service.getData().subscribe(function (data) {
            _this.ideas = data;
            l.dismiss();
        });
    };
    MoviesPage.prototype.delete = function (index) {
        var _this = this;
        this.service.removeIdea(this.ideas[index]._id).subscribe(function (res) {
            _this.service.getData().subscribe(function (data) {
                _this.ideas = data;
            });
        });
    };
    MoviesPage.prototype.edit = function (index) {
        var _this = this;
        var title = this.ideas[index].title;
        var content = this.ideas[index].content;
        var id = this.ideas[index]._id;
        var genre = this.ideas[index]._genre;
        var modal = this.model.create(__WEBPACK_IMPORTED_MODULE_5__edit_edit__["a" /* EditPage */], { item: { title: title, content: content, genre: genre } });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data.item.title, data.item.content, data.item.genre);
                _this.service.editIdea(id, data.item.title, data.item.content, data.item.genre).subscribe(function (res) {
                    _this.service.getData().subscribe(function (data) {
                        _this.ideas = data;
                    });
                });
            }
            else {
                console.log('closed');
            }
        });
    };
    MoviesPage.prototype.rate = function (index) {
        var _this = this;
        var isWatched = this.ideas[index].isWatched;
        var id = this.ideas[index]._id;
        var rating = this.ideas[index].rating;
        var modal = this.model.create(__WEBPACK_IMPORTED_MODULE_6__rate_rate__["a" /* RatePage */], { item: { isWatched: isWatched, rating: rating } });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data.item.isWatched);
                _this.service.rateIdea(id, data.item.isWatched, data.item.rating).subscribe(function (res) {
                    _this.service.getData().subscribe(function (data) {
                        _this.ideas = data;
                    });
                });
            }
            else {
                console.log('closed');
            }
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\movies\movies.html"*/'<!--\n  Generated template for the IdeasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Movie List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #083f57;">\n  <ion-item *ngFor="let idea of ideas;let i = index" >\n    <ion-card>\n      <ion-card-header>\n          <ion-item text-wrap>\n            <strong style="font-size: 20pt">{{idea.title}}</strong>\n            <div class="hr" style="border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;"> </div>\n            </ion-item>\n      </ion-card-header>\n      <ion-card-content>             \n        <ion-item text-wrap>\n        <strong>Synopsis:</strong><br/>{{idea.content}}\n        </ion-item>\n      </ion-card-content>\n    <ion-card-content>\n       <ion-item text-wrap>\n        <strong>Genre/s:</strong>{{idea.genre}}\n        </ion-item>\n      </ion-card-content>\n    <ion-card-content>      \n    <ion-item text-wrap>\n       <strong>Rating:</strong>{{idea.rating}}/100 \n    </ion-item>\n      </ion-card-content>\n        <button float-right ion-button  (click)="delete(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n     \n    </ion-card>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\movies\movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewideaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dataService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewideaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewideaPage = (function () {
    function NewideaPage(navCtrl, navParams, service, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toast = toast;
        this.constent = 'Add';
    }
    NewideaPage.prototype.ionViewDidLoad = function () {
    };
    NewideaPage.prototype.add = function (form) {
        var _this = this;
        this.service.addidea(form.value.title, form.value.content, form.value.genre).subscribe(function (data) {
            var t = _this.toast.create({
                message: data.message,
                duration: 3000
            });
            t.present();
        });
    };
    NewideaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newidea',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\newidea\newidea.html"*/'<!--\n  Generated template for the NewideaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{content}} Add Movie</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #083f57;">\n\n  <form #form="ngForm" (ngSubmit)="add(form)">\n    <ion-item>\n      <ion-label>Title of the Movie</ion-label>\n      <ion-input type="text" placeholder="Title"  name="title" ngModel required ></ion-input>\n     \n    </ion-item>\n      <ion-item>\n        <ion-label floating>\n       Synopsis\n        </ion-label>\n        <ion-textarea type="text" name="content"  ngModel required>\n        </ion-textarea>\n      </ion-item>\n\n    <ion-item>\n      <ion-label>Genre</ion-label>\n      <ion-select ngModel name="genre" required multiple="true">\n                <ion-option>Comedy</ion-option>\n        <ion-option>Action</ion-option>\n        <ion-option>Horror</ion-option>\n        <ion-option>Romance</ion-option>\n        <ion-option>Drama</ion-option>\n        <ion-option>Animation</ion-option>\n        <ion-option>Documentary</ion-option>\n        <ion-option>Science Fiction</ion-option>\n        <ion-option>Biographical Film</ion-option>\n        <ion-option>Musical</ion-option>\n      </ion-select>\n    </ion-item>\n\n      \n      <button style="margin-top:10px" ion-button block color="skyblue" [disabled]="!form.valid">\nAdd\n      </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\newidea\newidea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], NewideaPage);
    return NewideaPage;
}());

//# sourceMappingURL=newidea.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ideas_ideas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_dataService__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.idea = __WEBPACK_IMPORTED_MODULE_2__ideas_ideas__["a" /* IdeasPage */];
        this.movies = __WEBPACK_IMPORTED_MODULE_3__movies_movies__["a" /* MoviesPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.refresh = function () {
        this.service.getData();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-tabs (ionChange)="refresh()">\n<ion-tab [root]=\'idea\' tabTitle="Movie Watchlist" tabIcon="videocam">\n\n</ion-tab>\n<ion-tab [root]=\'movies\' tabTitle="Movies Watched" tabIcon="film">\n  \n  </ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\try3\Ionic\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__service_dataService__["a" /* DataService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		681,
		7
	],
	"../pages/edit/edit.module": [
		682,
		6
	],
	"../pages/home/home.module": [
		683,
		5
	],
	"../pages/ideas/ideas.module": [
		684,
		4
	],
	"../pages/movies/movies.module": [
		685,
		3
	],
	"../pages/newidea/newidea.module": [
		686,
		2
	],
	"../pages/rate/rate.module": [
		687,
		1
	],
	"../pages/tabs/tabs.module": [
		688,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newidea_newidea__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ideas_ideas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_service_dataService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_edit__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rate_rate__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newidea_newidea__["a" /* NewideaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ideas_ideas__["a" /* IdeasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__["a" /* MoviesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ideas/ideas.module#IdeasPageModule', name: 'IdeasPage', segment: 'ideas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newidea/newidea.module#NewideaPageModule', name: 'NewideaPage', segment: 'newidea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate/rate.module#RatePageModule', name: 'RatePage', segment: 'rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newidea_newidea__["a" /* NewideaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ideas_ideas__["a" /* IdeasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__["a" /* MoviesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__pages_service_dataService__["a" /* DataService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_idea__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.ideas = [];
    }
    DataService.prototype.addidea = function (title, content, genre) {
        this.tempidea = new __WEBPACK_IMPORTED_MODULE_3__model_idea__["a" /* IdeaModel */](title, content, genre);
        return this.addData();
    };
    DataService.prototype.addData = function () {
        var _this = this;
        return this.http.post("https://click2sched.herokuapp.com/post", { "title": this.tempidea.title, "content": this.tempidea.idea, "genre": this.tempidea.genre }).map(function (res) {
            console.log(res.json());
            return res.json();
        }).do(function () {
            _this.ideas.push(new __WEBPACK_IMPORTED_MODULE_3__model_idea__["a" /* IdeaModel */](_this.tempidea.title, _this.tempidea.idea, _this.tempidea.genre));
            console.log(_this.ideas);
        });
    };
    DataService.prototype.getideas = function () {
        return this.ideas.slice();
    };
    DataService.prototype.removeIdea = function (id) {
        return this.http.delete("https://click2sched.herokuapp.com/delete/" + id);
    };
    DataService.prototype.getData = function () {
        var _this = this;
        return this.http.get("https://click2sched.herokuapp.com/getideas").map(function (res) {
            console.log(res.json());
            return res.json();
        }).do(function (data) {
            _this.ideas = data;
            console.log(_this.ideas);
        });
    };
    DataService.prototype.getWatched = function () {
        var _this = this;
        return this.http.get("https://click2sched.herokuapp.com/getWatched").map(function (res) {
            console.log(res.json());
            return res.json();
        }).do(function (data) {
            _this.ideas = data;
            console.log(_this.ideas);
        });
    };
    DataService.prototype.editIdea = function (id, title, idea, genre) {
        return this.http.put("https://click2sched.herokuapp.com/update/" + id, { title: title, content: idea, genre: genre });
    };
    DataService.prototype.rateIdea = function (id, isWatched, rating) {
        return this.http.put("https://click2sched.herokuapp.com/rate/" + id, { isWatched: isWatched, rating: rating });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaModel; });
var IdeaModel = (function () {
    function IdeaModel(title, idea, genre) {
        this.title = title;
        this.idea = idea;
        this.genre = genre;
    }
    return IdeaModel;
}());

//# sourceMappingURL=idea.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_newidea_newidea__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Add Movie', component: __WEBPACK_IMPORTED_MODULE_6__pages_newidea_newidea__["a" /* NewideaPage */] },
            { title: 'Movies', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\try3\Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\try3\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    EditPage.prototype.ngOnInit = function () {
        var item = this.navParams.get('item');
        this.title = item.title;
        this.content = item.content;
        this.genre = item.genre;
        console.log(this.title, this.content, this.genre);
    };
    EditPage.prototype.ionViewDidLoad = function () {
    };
    EditPage.prototype.save = function () {
        this.view.dismiss({ item: { title: this.title, content: this.content, genre: this.genre } });
    };
    EditPage.prototype.cancel = function () {
        this.view.dismiss();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\edit\edit.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Movie</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #form="ngForm">\n  <ion-item> \n    <ion-label floating>\n   Title\n    </ion-label>\n    <ion-input type="text"  [(ngModel)]="title" name="title" required>\n    </ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>\n     Content\n      </ion-label>\n      <ion-textarea type="text" [(ngModel)]="content" name="content" required>\n      </ion-textarea>\n    </ion-item>\n        <ion-item>\n      <ion-label>Genre</ion-label>\n      <ion-select [(ngModel)]="genre" required multiple="true" name="genre">\n        <ion-option>Comedy</ion-option>\n        <ion-option>Action</ion-option>\n        <ion-option>Horror</ion-option>\n        <ion-option>Romance</ion-option>\n        <ion-option>Drama</ion-option>\n        <ion-option>Animation</ion-option>\n        <ion-option>Documentary</ion-option>\n        <ion-option>Science Fiction</ion-option>\n        <ion-option>Biographical Film</ion-option>\n        <ion-option>Musical</ion-option>\n      </ion-select>\n    </ion-item>\n    <button style="margin-top:10px" ion-button block color="success"  (click)="save()" [disabled]="!form.valid">\n  Save\n    </button>\n    <button style="margin-top:10px" ion-button block color="danger"  (click)="cancel()">\n      Close\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatePage = (function () {
    function RatePage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    RatePage.prototype.ngOnInit = function () {
        var item = this.navParams.get('item');
        this.title = item.title;
        console.log(this.title);
    };
    RatePage.prototype.ionViewDidLoad = function () {
    };
    RatePage.prototype.save = function () {
        this.view.dismiss({ item: { rating: this.rating, isWatched: this.isWatched } });
    };
    RatePage.prototype.cancel = function () {
        this.view.dismiss();
    };
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rate',template:/*ion-inline-start:"C:\try3\Ionic\src\pages\rate\rate.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rate Movie</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n      <ion-range min="0" max="100" pin="true" [(ngModel)]="rating">\n        <ion-icon range-left name="sad"></ion-icon>\n        <ion-icon range-right name="happy"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-input type="hidden"  [(ngModel)]="isWatched" value="true"></ion-input>\n    <button style="margin-top:10px" ion-button block color="success" outline (click)="save()">\n  Rate\n    </button>\n    <button style="margin-top:10px" ion-button block color="danger" outline (click)="cancel()">\n      Close\n        </button>\n</ion-content>\n'/*ion-inline-end:"C:\try3\Ionic\src\pages\rate\rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map