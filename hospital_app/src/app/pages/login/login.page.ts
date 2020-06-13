import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credForm: FormGroup;

  credentials : TokenPayload = {
    id: 0,
    name: '',
    username:'',
    email:'',
    password:'',
    contact:''    
  };


  
  constructor(private auth: AuthenticationService,
              private router: Router,
              private readonly formBuilder: FormBuilder
            ) { }

  ngOnInit() {
    this.credForm = this.formBuilder.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    
    });
  }

  validation_mess={
    'username': [
      { type: 'required', message: 'Introduceti username!'}
    ],
    'password': [
      { type: 'required', message: 'Introduceti parola!'}
    ]
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

//funtia care ma duce pe pagina de resetare a parolei
  goForgot(){
    this.router.navigate(['pacient-prog'])
  }
 
  onSubmit(){

//  login(){
    
    this.auth.login(this.credForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/pacient-dashboard')
      },
      err => {
        console.error('Nu s-a facut login')
      }

    )
    
  //}
}  

register(){
  this.router.navigateByUrl('/register')
  // this.auth.register(this.credentials).subscribe(res => {
  //   this.auth.login(this.credForm.value).subscribe()
  // });
}

logMed(){
  this.router.navigateByUrl('/login-med')
}

}
