import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentePageRoutingModule } from './medicamente-routing.module';

import { MedicamentePage } from './medicamente.page';

import { SharedComponentsModule } from 'src/app/shared-component/shared-components.module';

import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentePageRoutingModule,
    SharedComponentsModule,
    RouterModule
  ],
  declarations: [MedicamentePage]
})
export class MedicamentePageModule {}
