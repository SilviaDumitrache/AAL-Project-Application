import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch : 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},


  {
    path: 'medic-dashboard',
    loadChildren: './pages/medic-dashboard/medic-dashboard.module#MedicDashboardPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'MEDIC'
    }
  },
  {
    path: 'pacient-dashboard',
     loadChildren: './pages/pacient-dashboard/pacient-dashboard.module#PacientDashboardPageModule',
     canActivate: [AuthGuard],
     data: {
      role: 'PACIENT'
    }
    },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
