import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user= {
    email: '',
    pw: ''
  };
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // functia asta 'cheama' authentication service
  signIn() {
    this.auth.signIn(this.user).subscribe(user => {
      console.log('dupa login', user);

      let role = user['role'];

      if (role == 'MEDIC') {
        this.router.navigateByUrl('/medic-dashboard');
      }
      else if (role == 'PACIENT') {
        this.router.navigateByUrl('/pacient-dashboard');
      }
     
    })
  }

//funtia care ma duce pe pagina de resetare a parolei
  goForgot(){
    this.router.navigate(['forgot'])
  }

//functia care ma duce pe pagina de creare cont nou
  goRegister(){

  }  

}
