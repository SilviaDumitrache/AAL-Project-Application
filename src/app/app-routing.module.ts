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
  {
    path: 'pacient-prog',
    loadChildren: () => import('./pages/pacient-prog/pacient-prog.module').then( m => m.PacientProgPageModule)
  },
  {
    path: 'pacient-profil',
    loadChildren: () => import('./pages/pacient-profil/pacient-profil.module').then( m => m.PacientProfilPageModule)
  },
  {
    path: 'pacient-profil-med',
    loadChildren: () => import('./pages/pacient-profil-med/pacient-profil-med.module').then( m => m.PacientProfilMedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
