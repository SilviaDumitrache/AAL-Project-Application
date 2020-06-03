import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentePageRoutingModule } from './medicamente-routing.module';

import { MedicamentePage } from './medicamente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentePageRoutingModule
  ],
  declarations: [MedicamentePage]
})
export class MedicamentePageModule {}
