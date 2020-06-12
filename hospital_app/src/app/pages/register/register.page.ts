import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UsernameValidator } from 'src/app/validators/username.validator';

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
      // name: ['', [Validators.required]],
      name: new FormControl('', Validators.compose([
        // Validators.maxLength(25),
        Validators.required
      ])),

      // email: ['', [Validators.required]],
      email: new FormControl('', Validators.compose([
        Validators.required,
	    	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),  

      // username: ['', [Validators.required]],
      username: new FormControl('', Validators.compose([
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),

      // password: ['', [Validators.required]],
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //litere(upercase si lowercase)+cifre

      ])),

      // contact: ['', [Validators.required]]
      contact: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)

      ]))
    });
  }

  validation_mess={
    'name': [
      { type: 'required', message: 'Introduceti numele.'},
      // { type: 'maxlength', message: 'Numele nu trebuie sa fie mai lung de 25 de caractere.' },
    ],
    'email': [
      { type: 'required', message: 'Introduceti email.'},
      { type: 'pattern', message: 'Adresa de email nu este valida' }
    ],
    'username': [
      { type: 'required', message: 'Introduceti username.' },
      { type: 'minlength', message: 'Introduceti cel putin 5 caractere.' },
      { type: 'maxlength', message: 'Introduceti cel mullt 25 de caractere.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'password': [
      { type: 'required', message: 'Introduceti parola.'},
      { type: 'minlength', message: 'Introduceti cel putin 5 caractere.' },
      { type: 'maxlength', message: 'Introduceti cel mult 25 de caractere.' },
      { type: 'pattern', message: 'Introduceti o combinatie de litere si cifre' }
    ],
    'contact': [
      { type: 'required', message: 'Introduceti nr. de telefon!'},
      { type: 'minlength', message: 'Numarul trebuie sa contina 10 cifre' },
      { type: 'maxlength', message: 'Numarul trebuie sa contina 10 cifre' }
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
