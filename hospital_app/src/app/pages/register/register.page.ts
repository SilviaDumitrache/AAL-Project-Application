import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 public regForm: FormGroup;

  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    username: '',
    password: '',
    contact: ''
  }


  constructor(private auth: AuthenticationService,
              private router: Router,
              private readonly formBuilder: FormBuilder,
              private toastCtrl: ToastController
              ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group ({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      contact: ['', [Validators.required]]
    });
  }

  validation_mess={
    'name': [
      { type: 'required', message: 'Introduceti numele!'}
    ],
    'email': [
      { type: 'required', message: 'Introduceti email!'}
    ],
    'username': [
      { type: 'required', message: 'Introduceti username!'}
    ],
    'password': [
      { type: 'required', message: 'Introduceti parola!'}
    ],
    'contact': [
      { type: 'required', message: 'Introduceti nr. de telefon!'}
    ]
  }

  register(){
    this.auth.register(this.regForm.value).subscribe( () => {
      // this.router.navigateByUrl('/login')
      this.showToastAlert('Inregistrare cu success! Mergeti la Login.')
      console.log('ok')
    })
  }


  // register(){
    // this.auth.register(this.regForm.value).subscribe( 
    //   () => {
    //     if (this.regForm.value){
    //      console.log('campuri necompletate')
    //     } else {
    //     console.log('campuri completate')
    //     this.router.navigateByUrl('/login') }
    //       // console.log('campuri necompletate')
    //         // this.flashMessage.show('Inregistrare cu success',{cssClass:'alert-success', timeout: 3000});
    //         // this.router.navigateByUrl('/pacient-dashboard')
    //         // this.router.navigateByUrl('/login')
    //   },
    //   err => {
    //     console.error("Nu s-a facut inregistrarea")
    //     //inainte in paranteza era err
    //   }
    // )

  // }

  async showToastAlert(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: "middle"
    });
    toast.present();
  }


}
