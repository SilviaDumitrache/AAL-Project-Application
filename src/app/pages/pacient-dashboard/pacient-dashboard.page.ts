import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pacient-dashboard',
  templateUrl: './pacient-dashboard.page.html',
  styleUrls: ['./pacient-dashboard.page.scss'],
})
export class PacientDashboardPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signOut(){
    this.auth.signOut();
  }

}
