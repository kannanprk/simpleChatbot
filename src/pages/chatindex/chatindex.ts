import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonutilsProvider } from '../../providers/commonutils/commonutils';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
@IonicPage()
@Component({
  selector: 'page-chatindex',
  templateUrl: 'chatindex.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),
    transition('* => *', animate('.5s'))
  ]
})
export class ChatindexPage {
  //Varibale declarations
  userData:any;
  private animator: AnimationBuilder;
  @ViewChild('myElement') myElem;
  flyInOutState: String = 'in';

  constructor(
    public navCtrl: NavController,
    public utils: CommonutilsProvider,
    public navParams: NavParams,
    animationService: AnimationService,
    private nativePageTransitions: NativePageTransitions
    ) {
      this.animator = animationService.builder();
     }
  /**
   * @method Ionic page lifecycle method to fetch values before rendering the HTML views
   */
  ionViewCanEnter() {
    this.utils.getUserData().then((data:any)=>{
      this.userData = data;
    });
  }

  animateElem(items) {
    // this.animator.setType('slideInLeft').show(this.myElem.nativeElement);
    this.navigateChatDetails(items);
  }

  /**
   * @method for navigating to the chat details page
   * @param itemValue
   */
  navigateChatDetails(itemValue:any){
    // let options: NativeTransitionOptions = {
    //   direction: 'left',
    //   duration: 400,
    //   slowdownfactor: -1,
    //   iosdelay: 20
    //  };

    // this.nativePageTransitions.slide(options);
    // this.animator.setType('slideInLeft').show(this.myElem.nativeElement);
    this.flyInOutState = 'out';

    setInterval(() => {
      this.flyInOutState = 'in';
    }, 2000);

    this.navCtrl.push("ChatdetailsPage",{"itemValue":itemValue});
  }

  // slidePage(item) {
  //   let options: NativeTransitionOptions = {
  //     direction: 'left',
  //     duration: 400,
  //     slowdownfactor: -1,
  //     iosdelay: 200
  //    };

  //   this.nativePageTransitions.slide(options);
  //   // this.navCtrl.setRoot('ChatdetailsPage', {"itemValue":itemValue});
  // }

}
