import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, 
              private router: Router,
              private alertController: AlertController,
              private storage: Storage) { }

  //verifica daca un user poate merge pe o pagina (ruta)
  canActivate() {
    if(!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      
      return false

    }
    return true
  }
}

// async showAlert(){
//   let alert = await this.a({
//     header: 'Acces neautorizat!',
//     message: 'Nu sunteti autorizat sa vizitati aceasta pagina!',
//     buttons: ['OK']
//   });
//   alert.present();
// }

// canActivate(next ActivatedRouteSnapshot, state: RouterStateSnapshot){
//   return new Promise(resolve => {
//     this.storage.ready().then(() => {
//       const token = localStorage.getItem('token');

//       if (token) {
//         return resolve(true);
//       } else {
//         this.router.navigate(['/login'], {queryParams: {
//           return resolve(false);
//       }});
//       }
//     })
//   })
 
