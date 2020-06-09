// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { take, map } from 'rxjs/operators';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { AlertController } from '@ionic/angular';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthGuard implements CanActivate {
  
//   constructor(private router: Router, 
//               private auth: AuthService,
//               private alertCtrl: AlertController  
//     ){}


  
//   canActivate(route: ActivatedRouteSnapshot) {
//     // cand incercam sa accesam o pagina, afiseaza in consola rolul pe care trebuie sa il avem pt pagina respectiva
//     const expectedRole=route.data.role;
//     console.log('expected role:', expectedRole);

//     return this.auth.user.pipe(
//       take(1),
//       map(user => {

//         console.log('logged user', user);
//         if (user) {
//           let role = user['role'];

//           if (expectedRole==role){
//             return true;
//           } else {
//             this.showAlert();  
//             return this.router.parseUrl('/login');
//         } 
//       }else {
//         this.showAlert();  
//         return this.router.parseUrl('/login');
//       }    
//       })
//     )
//   }

//   async showAlert(){
//     let alert = await this.alertCtrl.create({
//       header: 'Acces neautorizat!',
//       message: 'Nu sunteti autorizat sa vizitati aceasta pagina!',
//       buttons: ['OK']
//     });
//     alert.present();
//   }

// }
