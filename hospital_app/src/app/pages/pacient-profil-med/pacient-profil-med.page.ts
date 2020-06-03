import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pacient-profil-med',
  templateUrl: './pacient-profil-med.page.html',
  styleUrls: ['./pacient-profil-med.page.scss'],
})
export class PacientProfilMedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['pacient-dashboard']);
  }

}
