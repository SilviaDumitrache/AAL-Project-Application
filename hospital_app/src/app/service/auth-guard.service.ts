import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  //verifica daca un user poate merge pe o pagina (ruta)
  canActivate() {
    if(!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false

    }
    return true
  }
}
