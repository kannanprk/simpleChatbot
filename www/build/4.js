webpackJsonp([4],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailsPageModule", function() { return ChatdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatdetailsPageModule = /** @class */ (function () {
    function ChatdetailsPageModule() {
    }
    ChatdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatdetails__["a" /* ChatdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatdetails__["a" /* ChatdetailsPage */]),
            ],
        })
    ], ChatdetailsPageModule);
    return ChatdetailsPageModule;
}());

//# sourceMappingURL=chatdetails.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonutils_commonutils__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatdetailsPage = /** @class */ (function () {
    function ChatdetailsPage(navCtrl, utils, media, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.media = media;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.playStop = "play";
        this.userDetails = this.navParams.get("itemValue");
    }
    ChatdetailsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.setBackButtonAction();
        this.utils.getChatHistory().then(function (chatData) {
            _this.chatHistory = chatData;
        });
    };
    ChatdetailsPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            //Write here wherever you wanna do
            // let options: NativeTransitionOptions = {
            //   direction: 'right',
            //   duration: 400,
            //   slowdownfactor: -1,
            //   iosdelay: 20
            //  };
            // this.nativePageTransitions.slide(options);
            _this.navCtrl.setRoot("ChatindexPage");
        };
    };
    /**
     * @method To play the media type files
     * @requires Cordova media plugin to play or record audio files
     * @param mediaFileURL
     */
    ChatdetailsPage.prototype.playMediaFile = function (mediaFileURL) {
        this.playStop = (this.playStop == "pause") ? "pause" : "play";
        var file = this.media.create(mediaFileURL);
        file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
        file.onSuccess.subscribe(function () { return console.log('Action is successful'); });
        file.onError.subscribe(function (error) { return console.log('Error!', error); });
        (this.playStop == "pause") ? file.play() : file.stop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], ChatdetailsPage.prototype, "navBar", void 0);
    ChatdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatdetails',template:/*ion-inline-start:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\chatdetails\chatdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="docsBg" style="display: inline-flex; margin: 5%; padding-left: 7%;">\n      <ion-title text-center>{{userDetails.name}}</ion-title>\n    </div>\n    <div class="docsBgImage" style="display: inline-flex; float: right;">\n    <ion-buttons end>\n      <img src={{userDetails.image}} class="avatarImage">\n    </ion-buttons>\n    </div>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="mimal-toolbar">\n    <span class="paraStyle">Last seen just now</span>\n  </div>\n  <ion-list no-lines class="docsBg">\n    <ion-item *ngFor="let chats of chatHistory">\n      <div *ngIf="chats.user1">\n        <ion-row class="leftChat">\n          <ion-col>\n            <p text-left text-wrap *ngIf="chats.user1 !== \'assets/media/SampleAudio_0.4mb.mp3\'">{{chats.user1}}</p>\n            <button *ngIf="chats.user1 == \'assets/media/SampleAudio_0.4mb.mp3\'" ion-button block round color="primary" clear icon-left (tap)="playMediaFile(chats.user1)">\n              <ion-icon name={{playStop}} color="primary"></ion-icon>\n              {{playStop == \'pause\' ? \'Stop Audio\' : \'Play Audio\'}}\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="chats.user2">\n        <ion-row class="rightChat">\n          <ion-col>\n            <p text-right text-wrap>{{chats.user2}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row class="chatbox">\n    <ion-col col-2>\n      <button ion-button clear color="dark" icon-only>\n        <ion-icon name="md-mic"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item style="background:transparent;border:none;">\n        <ion-input type="text" placeholder="Your message"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear color="secondary" icon-only>\n        <ion-icon name="happy"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear color="primary" icon-only>\n        <ion-icon name="attach"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\chatdetails\chatdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonutils_commonutils__["a" /* CommonutilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], ChatdetailsPage);
    return ChatdetailsPage;
}());

//# sourceMappingURL=chatdetails.js.map

/***/ })

});
//# sourceMappingURL=4.js.map