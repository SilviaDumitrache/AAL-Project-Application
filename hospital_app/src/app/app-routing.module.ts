import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './guards/auth.guard';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthForAdminService } from './service/auth-for-admin.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch : 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  // { path: 'pacient-dashboard',loadChildren: './pages/pacient-dashboard/pacient-dashboard.module#PacientDashboardPageModule' },

  // {
  //   path: 'medic-dashboard',
  //   loadChildren: './pages/medic-dashboard/medic-dashboard.module#MedicDashboardPageModule',
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: 'MEDIC'
  //   }
  // },
  // {
  //   path: 'pacient-dashboard',
  //    loadChildren: './pages/pacient-dashboard/pacient-dashboard.module#PacientDashboardPageModule',
  //    canActivate: [AuthGuard],
  //    data: {
  //     role: 'PACIENT'
  //   }
  //   },
  {
    path: 'pacient-dashboard',
    loadChildren: () => import('./pages/pacient-dashboard/pacient-dashboard.module').then( m => m.PacientDashboardPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'pacient-prog',
    loadChildren: () => import('./pages/pacient-prog/pacient-prog.module').then( m => m.PacientProgPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'pacient-profil',
    loadChildren: () => import('./pages/pacient-profil/pacient-profil.module').then( m => m.PacientProfilPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'pacient-profil-med',
    loadChildren: () => import('./pages/pacient-profil-med/pacient-profil-med.module').then( m => m.PacientProfilMedPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'medicamente',
    loadChildren: () => import('./pages/medicamente/medicamente.module').then( m => m.MedicamentePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login-med',
    loadChildren: () => import('./pages/login-med/login-med.module').then( m => m.LoginMedPageModule)
  },
  {
    path: 'medic-dashboard',
    loadChildren: () => import('./pages/medic-dashboard/medic-dashboard.module').then( m => m.MedicDashboardPageModule),
    canActivate: [AuthForAdminService]
  },  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
