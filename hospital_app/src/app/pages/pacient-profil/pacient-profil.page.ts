import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-pacient-profil',
  templateUrl: './pacient-profil.page.html',
  styleUrls: ['./pacient-profil.page.scss'],
})
export class PacientProfilPage implements OnInit {
  //contine detaliile utilizatorului logat
  details: UserDetails

  constructor(private router: Router , 
              private auth: AuthenticationService) { }

  //lista
  // sexes=[
  //   {name: 'F', isChecked: false },
  //   {name: 'M', isChecked: false},
  // ];

  ngOnInit() {
    this.auth.profile().subscribe(
     user => {
        this.details = user
      // },
      // err => {
      //   console.error(err)
      // }
     }
    )
  }

  back(){
    this.router.navigate(['pacient-dashboard']);
  }
}
