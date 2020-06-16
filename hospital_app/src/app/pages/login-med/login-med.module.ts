import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMedPageRoutingModule } from './login-med-routing.module';

import { LoginMedPage } from './login-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginMedPageRoutingModule
  ],
  declarations: [LoginMedPage]
})
export class LoginMedPageModule {}
