import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMedPageRoutingModule } from './login-med-routing.module';

import { LoginMedPage } from './login-med.page';

// import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule,
    LoginMedPageRoutingModule
  ],
  declarations: [LoginMedPage]
})
export class LoginMedPageModule {}
