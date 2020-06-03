import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientProfilMedPage } from './pacient-profil-med.page';

const routes: Routes = [
  {
    path: '',
    component: PacientProfilMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientProfilMedPageRoutingModule {}
