import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-pacient-dashboard',
  templateUrl: './pacient-dashboard.page.html',
  styleUrls: ['./pacient-dashboard.page.scss'],
})
export class PacientDashboardPage implements OnInit {

  constructor( private router:Router,
                private auth: AuthenticationService)
     { }

  ngOnInit() {
  }

  // signOut(){
  //   this.auth.signOut();
  // }

 

  goProgramare(){
    this.router.navigate(['pacient-prog']);
  }

  goProfil(){
    this.router.navigate(['pacient-profil']);
  }

  goProfilMed(){
    this.router.navigate(['pacient-profil-med']);
  }

  goMed(){
    this.router.navigate(['medicamente']);

  }

  goChat(){
    this.router.navigate(['chat']);
  }

  logout(){
    this.auth.logout();
  }

}
