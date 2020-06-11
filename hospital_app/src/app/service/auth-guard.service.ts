import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, 
              private router: Router,
              private alertCtrl: AlertController) { }

  //verifica daca un user poate merge pe o pagina (ruta)
  canActivate() {
    if(!this.auth.isLoggedIn()) {
      console.log('neautorizat')
      this.showAlert('Nu sunteti autorizat pe aceasta pagina')
      this.router.navigateByUrl('/')
      return false

    } 
    return true
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      header: 'Eroare!',
      buttons: ['Ok']

    });
    alert.then(alert => alert.present());
  }
}
