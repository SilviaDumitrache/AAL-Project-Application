import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicDashboardPageRoutingModule } from './medic-dashboard-routing.module';

import { MedicDashboardPage } from './medic-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicDashboardPageRoutingModule
  ],
  declarations: [MedicDashboardPage]
})
export class MedicDashboardPageModule {}
