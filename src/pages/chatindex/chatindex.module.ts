import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatindexPage } from './chatindex';

@NgModule({
  declarations: [
    ChatindexPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatindexPage),
  ],
})
export class ChatindexPageModule {}
