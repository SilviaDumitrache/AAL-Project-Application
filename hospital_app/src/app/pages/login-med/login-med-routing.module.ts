import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMedPage } from './login-med.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMedPageRoutingModule {}
