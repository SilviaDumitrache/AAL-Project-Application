import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

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
              private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.auth.register(this.credentials).subscribe(
      () => {
        // this.router.navigateByUrl('/pacient-dashboard')
        this.router.navigate(['pacient-dashboard']);
      },
      err => {
        console.error(err)
      }
    )

  }

}
