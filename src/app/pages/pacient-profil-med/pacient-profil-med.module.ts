import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientProfilMedPageRoutingModule } from './pacient-profil-med-routing.module';

import { PacientProfilMedPage } from './pacient-profil-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientProfilMedPageRoutingModule
  ],
 
  declarations: [PacientProfilMedPage]
})
export class PacientProfilMedPageModule {}
