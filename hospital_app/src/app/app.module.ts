import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';


import { ReactiveFormsModule } from '@angular/forms';

import { ChatModule } from './chat/chat.module';
import { from } from 'rxjs';

import { PacientProfilPage} from './pages/pacient-profil/pacient-profil.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  IonicStorageModule.forRoot(),
  ChatModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule //

 
],
  providers: [
    AuthGuardService,
    AuthenticationService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
