webpackJsonp([3],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button start ion-button color="primary" clear icon-only menuToggle>\n      <ion-icon name="md-list"></ion-icon>\n      <!-- <img style="width:12%;" src="assets/imgs/sidemenu.png"> -->\n    </button>\n    <ion-buttons end>\n      <img src="assets/imgs/girl.png" class="avatarImage">\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar padding>\n    <p class="nameStyle" text-left>Welcome back Lilly Joy <br> Things looks &nbsp;<font color="#4db6ac"><b>alright.</b></font>\n    </p>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col col-6 class="colClass">\n      <p text-center class="readingStyle">82 Bpm</p>\n      <img src="assets/imgs/line-graph (1).png" style="margin-left: 35%;">\n    </ion-col>\n    <ion-col col-6 class="colClass">\n      <p text-center class="readingStyle">36 Deg Clesius</p>\n      <img src="assets/imgs/graph.png" style="margin-left: 35%;">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 class="colClass">\n      <p text-center class="readingStyle">108 Units</p>\n      <img src="assets/imgs/graph.png" style="margin-left: 35%;">\n    </ion-col>\n    <ion-col col-6 class="colClass">\n      <p text-center class="readingStyle">15 Kelvin</p>\n      <img src="assets/imgs/line-graph (1).png" style="margin-left: 35%;">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <img src="assets/imgs/Chart-JS.png" class="finalBack"/>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=3.js.map