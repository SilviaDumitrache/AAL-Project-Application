import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
// import { } from '@angular/allert'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
              ) { }

  ngOnInit() {
  }

  register(){
    this.auth.register(this.credentials).subscribe( () => {
            // this.flashMessage.show('Inregistrare cu success',{cssClass:'alert-success', timeout: 3000});
            // this.router.navigateByUrl('/pacient-dashboard')
             this.router.navigate(['login']);
      },
      err => {
        console.error(err)
      }
    )

  }

}
