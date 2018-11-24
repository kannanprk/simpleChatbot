//npm library declarations
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Media } from '@ionic-native/media';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
/**
 * Ionic 2 & Above versions provides the concept of lazy loading
 * Every page had its own module file to initializes and loads all its dependencies during run time
 * It increases the speed of application stack navigation in pushing and poping pages
 * So none of the created pages imported/ declared in app.module files
 */
//Main page declarations
import { SimpleChatBotApp } from './app.component';

//Providers declaration
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonutilsProvider } from '../providers/commonutils/commonutils';

@NgModule({
  declarations: [
    SimpleChatBotApp,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(SimpleChatBotApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SimpleChatBotApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonutilsProvider,
    Media,
    NativePageTransitions
  ]
})
export class AppModule {}
