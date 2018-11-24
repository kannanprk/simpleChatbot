import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-loader',
  templateUrl: 'loader.html',
})
export class LoaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoaderPage');
  }

  ionViewCanEnter(){
    setTimeout(() => {
      this.navCtrl.setRoot("DashboardPage");
    }, 1600);
  }

}
