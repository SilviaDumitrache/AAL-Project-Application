import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientDashboardPage } from './pacient-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PacientDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientDashboardPageRoutingModule {}
