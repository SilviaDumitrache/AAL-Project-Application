import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, AdminTokenPayload } from 'src/app/service/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-med',
  templateUrl: './login-med.page.html',
  styleUrls: ['./login-med.page.scss'],
})
export class LoginMedPage implements OnInit {

  credForm: FormGroup;

  constructor(private router : Router,
              private auth: AuthenticationService,
              private readonly formBuilder: FormBuilder) { }

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

  //buton catre login pacient
  log(){
    this.router.navigateByUrl('/login')
  }

  onSubmit() {
    this.auth.loginMed(this.credForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/medic-dashboard')
      },
      err => {
        console.log('Nu s-a facut login')
      }
    )
  }


}