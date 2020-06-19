import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medic-dashboard',
  templateUrl: './medic-dashboard.page.html',
  styleUrls: ['./medic-dashboard.page.scss'],
})
export class MedicDashboardPage implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
  }

  // signOut(){
  //   this.auth.signOut();
  // }

  logout(){
    this.auth.logoutMed();
  }

  goPac(){
    this.router.navigateByUrl('/pacienti')
  }

}
