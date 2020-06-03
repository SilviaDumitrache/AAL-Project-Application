import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-medic-dashboard',
  templateUrl: './medic-dashboard.page.html',
  styleUrls: ['./medic-dashboard.page.scss'],
})
export class MedicDashboardPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signOut(){
    this.auth.signOut();
  }

}
