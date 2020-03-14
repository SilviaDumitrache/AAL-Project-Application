import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicDashboardPage } from './medic-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: MedicDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicDashboardPageRoutingModule {}
