import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMedPageRoutingModule } from './chat-med-routing.module';

import { ChatMedPage } from './chat-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMedPageRoutingModule
  ],
  declarations: [ChatMedPage]
})
export class ChatMedPageModule {}
