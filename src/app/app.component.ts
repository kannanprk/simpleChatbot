import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * @copyright Skein Technologies
 * @author Arul Selvam
 * Initial file to load and do prior level app configurations and settings
 */
@Component({
  templateUrl: 'app.html'
})
export class SimpleChatBotApp {
  //Variable declarations

  //Reponsible to page navigation stacks
  @ViewChild(Nav) nav: Nav;

  /**
   * rootpage variable makes decide the app to navigate intialy
   */
  rootPage: any = "LoginPage";
  pages: Array<{title: string, pageName: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.TriggerApp();
    this.pages = [
      { title: 'Dashboard', pageName: "DashboardPage",icon:"speedometer"},
      { title: 'Chats', pageName: "ChatindexPage",icon:"ios-chatbubbles"},
      { title: 'LogOut', pageName: "LoginPage", icon: "md-log-out" }
    ];
  }
  /**
   * @method Initialize the app to load webview files once cordova platform gets ready
   */
  TriggerApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * @method To navigate to the concerned pages dynamically based on user taps
   * @param page
   */
  navigateToPage(page) {
    this.nav.setRoot(page.pageName);
  }
}
