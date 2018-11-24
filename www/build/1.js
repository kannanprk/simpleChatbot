webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl) {
        // this.loginForm = formBuilder.group({
        //   email: ['', Validators.compose([Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
        //   password: ['', Validators.compose([Validators.required])]
        // })
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.imageSrc = [];
        this.showImage = false;
        this.gifAnimation = false;
        // setTimeout(()=>{
        // console.log("before SetTimeOut");
        // this.showImage = true;
        // this.imageSrc.push("assets/imgs/gif_03.gif");
        // },100);
        // setTimeout(() => {
        //   console.log("SetTimeOut");
        //   this.showImage = false;
        // }, 1500);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var pathSvg = $("#path").get(0), pathMain = pathSvg.getTotalLength();
        var confirm = $("#confirm").get(0), pathConfirm = confirm.getTotalLength();
        var contour = $("#contour").get(0), pathContour = contour.getTotalLength();
        var circle = $("#circle").get(0), pathCircle = circle.getTotalLength();
        var line = $("#line").get(0), pathLine = line.getTotalLength();
        var time = 300;
        $("path").each(function () {
            var path = $(this).get(0), pathTotal = path.getTotalLength();
            $(this).css({
                'stroke-dasharray': pathTotal,
                'stroke-dashoffset': pathTotal
            });
        });
        $(".email, .password").on('focusin', function () {
            $(this).parent(".cd-block").addClass('in-focus');
        });
        $(".email, .password").on('focusout', function () {
            $(this).parent(".cd-block").removeClass('in-focus');
        });
        $(".email, .password").on('change keyup', function () {
            ($(this).val() !== '') ? $(this).parent(".cd-block").addClass('typing') : $(this).parent(".cd-block").removeClass('typing');
        });
        $(".email").on('focusin keyup', function () {
            $("#path").animate({
                'stroke-dashoffset': pathMain - $(".email").innerWidth()
            }, time);
            //Validation Email - http://stackoverflow.com/questions/3663968/how-to-validate-email-in-jquery
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            (testEmail.test(this.value)) ? $("#confirm").animate({
                'stroke-dashoffset': 0
            }, time) : $("#confirm").animate({
                'stroke-dashoffset': pathConfirm
            }, time);
        });
        $(".password").on('focusin keyup', function () {
            $("#path").animate({
                'stroke-dashoffset': -(pathMain - $(".email").innerWidth())
            }, time);
            if ($(this).val() == '') {
                $("#contour").animate({
                    'stroke-dashoffset': pathContour
                }, time);
                $("#circle").animate({
                    'stroke-dashoffset': pathCircle
                }, time);
                $("#line").animate({
                    'stroke-dashoffset': pathLine
                }, time);
                $(".password").attr('type', 'password');
            }
            else {
                $("#contour, #circle").animate({
                    'stroke-dashoffset': 0
                }, time);
            }
        });
        $("#show_password").on('click', function () {
            $(".password").attr('type') === 'password' ?
                ($(".password").attr('type', 'text'), $("#line").animate({
                    'stroke-dashoffset': 0
                }, time)) :
                ($(".password").attr('type', 'password'), $("#line").animate({
                    'stroke-dashoffset': pathLine
                }, time));
        });
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot("LoaderPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\login\login.html"*/'<ion-content>\n  <div class="wrapper">\n    <div>\n      <p class="line">Lines</p>\n      <p class="welcome">Welcome back, <br />\n        <span class="signIn">sign in to continue</span> <br />\n        <span class="signIn">to Lines.</span> </p>\n      <form>\n        <fieldset>\n          <div class="cd-block">\n            <input class="email" name="user-email" type="email" placeholder="Email">\n            <svg version="1.1" id="validate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n              viewBox="0 0 46 46">\n              <path id="confirm" fill="none" stroke="#36AEE4" stroke-width="2" stroke-miterlimit="10" d="M14.7,23.3l6.6,6.4l10-13.4" />\n            </svg>\n          </div>\n          <div class="cd-block">\n            <input class="password" name="user-passoword" type="password" placeholder="Passoword">\n            <svg version="1.1" id="show_password" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n              viewBox="0 0 46 46">\n              <path id="contour" fill="none" stroke="#36AEE4" stroke-width="2" stroke-miterlimit="10" d="M12.1,23.4c0,0,10.5-16,21.8,0\n            C34,23.4,24.7,39.3,12.1,23.4z" />\n              <path id="circle" fill="none" stroke="#36AEE4" stroke-width="2" stroke-miterlimit="10" d="M23.1,20L23.1,20\n            c1.8,0,3.3,1.5,3.3,3.3v0c0,1.8-1.5,3.3-3.3,3.3h0c-1.8,0-3.3-1.5-3.3-3.3v0C19.7,21.5,21.2,20,23.1,20z" />\n              <path id="line" fill="none" stroke="#36AEE4" stroke-width="2" stroke-miterlimit="10" d="M13.9,33.2c0,0,15.7-17.2,18.3-19.6" />\n            </svg>\n          </div>\n          <svg version="1.1" id="way" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n            viewBox="0 0 267 46">\n            <path id="path" fill="none" stroke="#36AEE4" stroke-width="2" stroke-miterlimit="10" d="M0,1h239.1c0,0,26.9-1.6,26.9,22\n          c0,23.8-26.9,22-26.9,22H0" />\n          </svg>\n        </fieldset>\n        <!-- <span  name="login">Login</span> -->\n        <ion-input type="submit" Value="Login" class="login" (tap)="login()" name="login">Login</ion-input>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <br>\n  <p class="signUp">Don\'t have an account? <span style="color:black">Signup</span></p>\n</ion-footer>\n'/*ion-inline-end:"E:\Animation Project\SimpleChatBot24\SimpleChatBot24\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map