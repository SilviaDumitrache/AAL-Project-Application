import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacient-profil',
  templateUrl: './pacient-profil.page.html',
  styleUrls: ['./pacient-profil.page.scss'],
})
export class PacientProfilPage implements OnInit {

  constructor(private router: Router) { }

  //lista
  // sexes=[
  //   {name: 'F', isChecked: false },
  //   {name: 'M', isChecked: false},
  // ];

  ngOnInit() {
  }

  back(){
    this.router.navigate(['pacient-dashboard']);
  }
}
