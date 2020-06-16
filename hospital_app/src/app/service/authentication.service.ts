import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators'; 
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


export interface UserDetails {
  id: number
  name: string
  email: string
  username: string
  // role: string
  password: string
  contact: string
  exp: number
  iat: number
}


interface TokenResponse{
  token: string
}

export interface TokenPayload {
  id: number
  name: string
  email: string
  // role: string
  username: string
  password: string
  contact: string
}


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private token: string
  // public authState = new BehaviorSubject(null);

  constructor(private http: HttpClient, 
              private router: Router,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController
            ) { }

  //preia token-ul si il seteaza ca userToken
  //token -> in local storage
  private saveToken (token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token
  }



  
  //luam token din local storage
  //verifica daca tokenul exista deja
  //daca deja exista, il preia pe cel existent din local storage
  private getToken() : string {
    if (!this.token){
      this.token= localStorage.getItem('userToken')
    }
    return this.token
  }

  //preia token-ul si returneaza JSON pe care il pot folosi oriunde in app
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if(token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  //verifica daca userul este logat
  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now()/1000
    } else {
      return false
    }
  }

  //inregistrare user -> catre backend
  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(`${environment.apiUrl}/users/register`, user)  //adr din backend

    //pipe -> folosim datele dupe ce ele sunt diponibile
    const request = base.pipe (
      map( (data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
          // this.showAlert('Inregistrare cu success!')
        } 
        return data
      })
    )
    
    return request
  }

  //login user
  public login( user: TokenPayload) : Observable<any> {
    const base = this.http.post(`${environment.apiUrl}/users/login`, user)
  

    const request = base.pipe(
      map(( data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        } else {
          this.showToastAlert('Username-ul si parola nu se potrivesc.')
        }
        return data
        
      } 
      )
    )

    // this.showToastAlert('Completati toate campurile si reincercati.');
    return request
  }

  //user profile
  public profile(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/users/profile`, {
      headers: { Authorization: `${this.getToken()}`}
    })
  }

  //delogare user -> se elimina tokenul din local storage si ne intoarce la login page
  public logout(): void {
    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/login')
    
  }

  
  showAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      header: 'Info',
      buttons: ['Ok']

    });
    alert.then(alert => alert.present());
  }

  async showToastAlert(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: "middle"
    });
    toast.present();
  }

  

}
