import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { CommonutilsProvider } from '../../providers/commonutils/commonutils';
import { Media, MediaObject } from '@ionic-native/media';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-chatdetails',
  templateUrl: 'chatdetails.html',
})
export class ChatdetailsPage {
  @ViewChild(Navbar) navBar: Navbar;
  //Variable declaration
  userDetails:any;
  chatHistory:any;
  playStop:any = "play";
  constructor(
    public navCtrl: NavController,
    public utils:CommonutilsProvider,
    private media: Media,
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions
    ) {
    this.userDetails = this.navParams.get("itemValue");
  }

  ionViewCanEnter() {
    this.setBackButtonAction()
    this.utils.getChatHistory().then((chatData:any)=>{
      this.chatHistory = chatData;
    })
  }

  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
      //Write here wherever you wanna do
      // let options: NativeTransitionOptions = {
      //   direction: 'right',
      //   duration: 400,
      //   slowdownfactor: -1,
      //   iosdelay: 20
      //  };
   
      // this.nativePageTransitions.slide(options);
       this.navCtrl.setRoot("ChatindexPage");
    }
  }

  /**
   * @method To play the media type files
   * @requires Cordova media plugin to play or record audio files
   * @param mediaFileURL
   */
  playMediaFile(mediaFileURL){
    this.playStop = (this.playStop == "pause") ? "pause" : "play";
    const file: MediaObject = this.media.create(mediaFileURL);
    file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    file.onSuccess.subscribe(() => console.log('Action is successful'));
    file.onError.subscribe(error => console.log('Error!', error));
    (this.playStop == "pause") ? file.play() : file.stop();
  }

}
