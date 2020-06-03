import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientDashboardPageRoutingModule } from './pacient-dashboard-routing.module';

import { PacientDashboardPage } from './pacient-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientDashboardPageRoutingModule
  ],
  declarations: [PacientDashboardPage]
})
export class PacientDashboardPageModule {}
