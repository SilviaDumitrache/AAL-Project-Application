import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';


import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuardService } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';



import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:3002', options: {} };
const config: SocketIoConfig = { url: 'http://192.168.1.5:3002', options: {} };

import { Health } from '@ionic-native/health/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  IonicStorageModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  SocketIoModule.forRoot(config),
  


 
],
  providers: [
    AuthGuardService,
    AuthenticationService,
    StatusBar,
    SplashScreen,
    Health,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
