import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-med',
  templateUrl: './login-med.page.html',
  styleUrls: ['./login-med.page.scss'],
})
export class LoginMedPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  log(){
    this.router.navigateByUrl('/login')
  }
}
