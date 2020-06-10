import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { ElementSchemaRegistry } from '@angular/compiler';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const TOKEN_KEY = 'user-access-token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<any>;
  private authState=new BehaviorSubject(null);

  // store the Jason Web Token
  constructor(private storage: Storage, 
              private router:Router) {
    this.loadUser();

    this.user= this.authState.asObservable()
    .pipe(
      filter(response => response)
    )
   }

   loadUser(){
    //  luam token-ul din storage
     this.storage.get(TOKEN_KEY).then(data => {
      // daca token-ul exista in storage, putem stabili "authState"
      if (data) {
         this.authState.next(data);
       } else {
         this.authState.next({ email:null, role:null});
       }
     });
   }

  signIn(credentials): Observable<any> {
    let email = credentials.email;
    let pw = credentials.pw;
    let user = null;

  

    if (email === 'medic' && pw === '123'){
      user = {email, role: 'MEDIC'};
    }else
    if (email === 'pacient' && pw === '123') {
      user = {email, role: 'PACIENT'};
    }

    this.authState.next(user);

    this.storage.set(TOKEN_KEY, user);

    // asta returneaza un observable de tip user
    return of(user);
  }

  async signOut(){
    await this.storage.set(TOKEN_KEY, null);
    this.authState.next(null);
    this.router.navigateByUrl('/login');
  }

}
