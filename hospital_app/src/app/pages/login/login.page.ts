import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials : TokenPayload = {
    id: 0,
    name: '',
    username:'',
    email:'',
    password:'',
    contact:''    
  };

  // token : TokenResponse = {
  //   token: string
  // }

  
  constructor(private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  // functia asta 'cheama' authentication service
  // signIn() {
  //   this.auth.signIn(this.user).subscribe(user => {
  //     console.log('dupa login', user);

  //     let role = user['role'];

  //     if (role == 'MEDIC') {
  //       this.router.navigateByUrl('/medic-dashboard');
  //     }
  //     else if (role == 'PACIENT') {
  //       this.router.navigateByUrl('/pacient-dashboard');
  //     }
     
  //   })
  // }

// //funtia care ma duce pe pagina de resetare a parolei
//   goForgot(){
//     this.router.navigate(['pacient-prog'])
//   }

  login(){
    
    this.auth.login(this.credentials).subscribe( credentials => {
      this.router.navigateByUrl('/pacient-dashboard')
      console.log('dupa login', credentials) //tokenul in consola
      },
      err => {
        
      }

    )
    
  }


 
}
