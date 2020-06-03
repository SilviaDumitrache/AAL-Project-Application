import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacient-dashboard',
  templateUrl: './pacient-dashboard.page.html',
  styleUrls: ['./pacient-dashboard.page.scss'],
})
export class PacientDashboardPage implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  signOut(){
    this.auth.signOut();
  }

  chatBot(){
    
  }

  goProgramare(){
    this.router.navigate(['pacient-prog']);
  }

  goProfil(){
    this.router.navigate(['pacient-profil']);
  }

  goProfilMed(){
    this.router.navigate(['pacient-profil-med']);
  }

}
