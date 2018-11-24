webpackJsonp([5],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chatdetails/chatdetails.module": [
		284,
		4
	],
	"../pages/chatindex/chatindex.module": [
		285,
		0
	],
	"../pages/dashboard/dashboard.module": [
		286,
		3
	],
	"../pages/loader/loader.module": [
		287,
		2
	],
	"../pages/login/login.module": [
		288,
		1
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonutilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Common Utils provider for providing data source between the app
 * It contains the common data source - User data which can be accessed over all the pages in app
 * @copyright Skein Technologies pvt ltd
 * @author Arul Selvam
 */
var CommonutilsProvider = /** @class */ (function () {
    function CommonutilsProvider(http) {
        this.http = http;
        //Local variable to hold the user data
        this.userData = [{
                "name": "John Smith",
                "image": "assets/imgs/user.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "2",
                "badgeVal": "2"
            }, {
                "name": "Lilly Joy",
                "image": "assets/imgs/girl.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "0",
                "badgeVal": "2"
            }, {
                "name": "Ruby Anderson",
                "image": "assets/imgs/photo.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "0",
                "badgeVal": "2"
            }, {
                "name": "Johny Ive",
                "image": "assets/imgs/user.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "0",
                "badgeVal": "2"
            }, {
                "name": "Rosy Edison",
                "image": "assets/imgs/girl.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "2",
                "badgeVal": "1"
            }, {
                "name": "Phills Sebastin",
                "image": "assets/imgs/photo.png",
                "shortSentence": "Some sentence to be replaced here during production builds.",
                "badge": "0",
                "badgeVal": "2"
            }];
        this.chatHistory = [
            { "user1": "Hi, How are you?", "type": "text" },
            { "user2": "Hi, I'm fine. Thanks for asking, what about you?", "type": "text" },
            { "user1": "Yeah, I too fine. Did you heared anything about chatboat application?", "type": "text" },
            { "user2": "Chatbot !!!, Whats that mean ? and why to use it?", "type": "text" },
            { "user1": "I had attached a audio for you, please listen and send our feedback", "type": "text" },
            { "user2": "Is it ? Whats is that?", "type": "text" },
            { "user1": "assets/media/SampleAudio_0.4mb.mp3", "type": "media" },
            { "user2": "Nice,Tell me about the Chatbot.", "type": "text" },
            { "user1": "Yes, Chatbot is a messaging type applicaton which can be installed in smartphones", "type": "text" },
            { "user2": "Oh, Really!!! Quiet intresting. Did you installed anything like this ?", "type": "text" },
            { "user1": "Hmm No, But Skein technology is preparing an One to one chatbot application.We can download it from playstore very soon.", "type": "text" },
            { "user2": "Awesome..!!! Waiting to do that soon", "type": "text" },
        ];
    }
    /**
     * @method   returing the user data to requesting app pages
     * @returns  list of user data
     */
    CommonutilsProvider.prototype.getUserData = function () {
        var _this = this;
        //resolves for user data and return it
        return new Promise(function (resolve) {
            resolve(_this.userData);
        });
    };
    /**
     * @method returing the chat history for app pages
     * @returns list of chat history
     */
    CommonutilsProvider.prototype.getChatHistory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.chatHistory);
        });
    };
    CommonutilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommonutilsProvider);
    return CommonutilsProvider;
}());

//# sourceMappingURL=commonutils.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_css_animator__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_commonutils_commonutils__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//npm library declarations








/**
 * Ionic 2 & Above versions provides the concept of lazy loading
 * Every page had its own module file to initializes and loads all its dependencies during run time
 * It increases the speed of application stack navigation in pushing and poping pages
 * So none of the created pages imported/ declared in app.module files
 */
//Main page declarations

//Providers declaration



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* SimpleChatBotApp */],
                __WEBPACK_IMPORTED_MODULE_6_css_animator__["AnimatesDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* SimpleChatBotApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chatdetails/chatdetails.module#ChatdetailsPageModule', name: 'ChatdetailsPage', segment: 'chatdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatindex/chatindex.module#ChatindexPageModule', name: 'ChatindexPage', segment: 'chatindex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loader/loader.module#LoaderPageModule', name: 'LoaderPage', segment: 'loader', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* SimpleChatBotApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6_css_animator__["AnimationService"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_commonutils_commonutils__["a" /* CommonutilsProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleChatBotApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
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
 * @copyright Skein Technologies
 * @author Arul Selvam
 * Initial file to load and do prior level app configurations and settings
 */
var SimpleChatBotApp = /** @class */ (function () {
    function SimpleChatBotApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        /**
         * rootpage variable makes decide the app to navigate intialy
         */
        this.rootPage = "LoginPage";
        this.TriggerApp();
        this.pages = [
            { title: 'Dashboard', pageName: "DashboardPage", icon: "speedometer" },
            { title: 'Chats', pageName: "ChatindexPage", icon: "ios-chatbubbles" },
            { title: 'LogOut', pageName: "LoginPage", icon: "md-log-out" }
        ];
    }
    /**
     * @method Initialize the app to load webview files once cordova platform gets ready
     */
    SimpleChatBotApp.prototype.TriggerApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    /**
     * @method To navigate to the concerned pages dynamically based on user taps
     * @param page
     */
    SimpleChatBotApp.prototype.navigateToPage = function (page) {
        this.nav.setRoot(page.pageName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], SimpleChatBotApp.prototype, "nav", void 0);
    SimpleChatBotApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Simple ChatBot</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose ion-item *ngFor="let p of pages" (tap)="navigateToPage(p)">\n        <ion-icon name={{p.icon}} color="primary" item-start></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <p text-center>Copyrights@Skein Technologies</p>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SimpleChatBotApp);
    return SimpleChatBotApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map