import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientiPage } from './pacienti.page';

const routes: Routes = [
  {
    path: '',
    component: PacientiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientiPageRoutingModule {}
