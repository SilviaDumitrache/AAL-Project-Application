import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentePage } from './medicamente.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentePageRoutingModule {}
