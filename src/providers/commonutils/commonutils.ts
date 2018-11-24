import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Common Utils provider for providing data source between the app
 * It contains the common data source - User data which can be accessed over all the pages in app
 * @copyright Skein Technologies pvt ltd
 * @author Arul Selvam
 */
@Injectable()
export class CommonutilsProvider {
  //Local variable to hold the user data
  userData:any = [{
    "name":"John Smith",
    "image":"assets/imgs/user.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"2",
    "badgeVal":"2"
  },{
    "name":"Lilly Joy",
    "image":"assets/imgs/girl.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"0",
    "badgeVal":"2"
  },{
    "name":"Ruby Anderson",
    "image":"assets/imgs/photo.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"0",
    "badgeVal":"2"
  },{
    "name":"Johny Ive",
    "image":"assets/imgs/user.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"0",
    "badgeVal":"2"
  },{
    "name":"Rosy Edison",
    "image":"assets/imgs/girl.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"2",
    "badgeVal":"1"
  },{
    "name":"Phills Sebastin",
    "image":"assets/imgs/photo.png",
    "shortSentence":"Some sentence to be replaced here during production builds.",
    "badge":"0",
    "badgeVal":"2"
  }];

  chatHistory:any = [
    {"user1":"Hi, How are you?","type":"text"},
    {"user2":"Hi, I'm fine. Thanks for asking, what about you?","type":"text"},
    {"user1":"Yeah, I too fine. Did you heared anything about chatboat application?","type":"text"},
    {"user2":"Chatbot !!!, Whats that mean ? and why to use it?","type":"text"},
    {"user1":"I had attached a audio for you, please listen and send our feedback","type":"text"},
    {"user2":"Is it ? Whats is that?","type":"text"},
    {"user1":"assets/media/SampleAudio_0.4mb.mp3","type":"media"},
    {"user2":"Nice,Tell me about the Chatbot.","type":"text"},
    {"user1":"Yes, Chatbot is a messaging type applicaton which can be installed in smartphones","type":"text"},
    {"user2":"Oh, Really!!! Quiet intresting. Did you installed anything like this ?","type":"text"},
    {"user1":"Hmm No, But Skein technology is preparing an One to one chatbot application.We can download it from playstore very soon.","type":"text"},
    {"user2":"Awesome..!!! Waiting to do that soon","type":"text"},
  ]

  constructor(public http: HttpClient) {
  }

  /**
   * @method   returing the user data to requesting app pages
   * @returns  list of user data
   */
  getUserData(){
    //resolves for user data and return it
    return new Promise((resolve)=>{
      resolve(this.userData);
    });
  }

  /**
   * @method returing the chat history for app pages
   * @returns list of chat history
   */
  getChatHistory(){
    return new Promise((resolve)=>{
      resolve(this.chatHistory);
    });
  }

}
