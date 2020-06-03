import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientProgPageRoutingModule } from './pacient-prog-routing.module';

import { PacientProgPage } from './pacient-prog.page';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientProgPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [PacientProgPage]
})
export class PacientProgPageModule {}
