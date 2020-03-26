import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientProfilPageRoutingModule } from './pacient-profil-routing.module';

import { PacientProfilPage } from './pacient-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientProfilPageRoutingModule
  ],
  declarations: [PacientProfilPage]
})
export class PacientProfilPageModule {}
