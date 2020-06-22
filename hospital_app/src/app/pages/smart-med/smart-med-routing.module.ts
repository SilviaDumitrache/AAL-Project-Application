import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartMedPage } from './smart-med.page';

const routes: Routes = [
  {
    path: '',
    component: SmartMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartMedPageRoutingModule {}
