import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartMedPageRoutingModule } from './smart-med-routing.module';

import { SmartMedPage } from './smart-med.page';

import { Health } from '@ionic-native/health/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Health,
    SmartMedPageRoutingModule
  ],
  declarations: [SmartMedPage]
})
export class SmartMedPageModule {}
