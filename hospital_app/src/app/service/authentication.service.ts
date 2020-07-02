import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators'; 
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

//user
export interface UserDetails {
  id: number
  name: string
  email: string
  username: string
  password: string
  contact: string
  exp: number
  iat: number
}

//med
export interface AdminDetails {
  id: number
  name: string
  email: string
  username: string
  password: string
  contact: string
  job_profile:string
  exp: number
  iat: number
}


interface TokenResponse{
  token: string
}

interface AdminTokenResponse{
  token: string
}

//user
export interface TokenPayload {
  id: number
  name: string
  email: string
  username: string
  password: string
  contact: string
  
}

//admin
export interface AdminTokenPayload{
  id: number
  name: string
  email: string
  username: string
  password: string
  contact: string
  job_profile: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private token: string
  // public authState = new BehaviorSubject(null);
  currentUser: TokenPayload;

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

  //preia token-ul si returneaza JSON 
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



  public getAdminDetails(): AdminDetails {
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
  public isUserLoggedIn(): boolean {
    const user = this.getUserDetails()
  
    if (user ) {
      return user.exp > Date.now()/1000
    } else {
      return false
    }
  }

  

  //verifica daca adminul este logat
  public isAdminLoggedIn(): boolean {
    const admin = this.getAdminDetails()
    if (admin) {
      return admin.exp > Date.now()/1000
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

  //autentificare user
  public login( user: TokenPayload) : Observable<any> {
    const base = this.http.post(`${environment.apiUrl}/users/login`, user)
  

    const request = base.pipe(
      map(( data: TokenResponse) => {
        if (!data.token) {
          this.showToastAlert('Username-ul si parola nu se potrivesc.')
        } else {
          
          this.saveToken(data.token)
        }
        return data
        
      } 
      )
    )

    // this.showToastAlert('Completati toate campurile si reincercati.');
    return request
  }

  //autentificare med
  public loginMed( admin: AdminTokenPayload) : Observable<any> {
    const base = this.http.post(`${environment.apiUrl}/admin/login`, admin)
  

    const request = base.pipe(
      map(( data: AdminTokenResponse) => {
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
    return this.http.get(`${environment.apiUrl}/users/profile`, {
      headers: { Authorization: `${this.getToken()}`}
    })
  }

  //delogare user -> se elimina tokenul din local storage si ne intoarce la login page
  public logout(): void {
    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/login')
    
  }

  //delogare medic
  public logoutMed(): void {
    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/login-med') 
  }

  getUserInf(): TokenPayload{
    return this.currentUser;
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
