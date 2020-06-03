import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientProgPage } from './pacient-prog.page';

const routes: Routes = [
  {
    path: '',
    component: PacientProgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientProgPageRoutingModule {}
