import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators'; 
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthForAdminService  implements CanActivate {

  constructor(private http: HttpClient, 
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private auth: AuthenticationService) { }

    canActivate() {
      if (!this.auth.isAdminLoggedIn) {
        console.log('Neautorizat. Logare mai intai')
        this.router.navigateByUrl('/login-med')
  
      }else 
      return true
    }

}
