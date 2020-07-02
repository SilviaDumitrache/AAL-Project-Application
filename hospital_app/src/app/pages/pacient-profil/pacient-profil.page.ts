import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload, UserDetails } from 'src/app/service/authentication.service';
import { Iuser } from 'src/app/serv/int_user';

@Component({
  selector: 'app-pacient-profil',
  templateUrl: './pacient-profil.page.html',
  styleUrls: ['./pacient-profil.page.scss'],
})
export class PacientProfilPage implements OnInit {
  //contine detaliile utilizatorului logat
  // details: TokenPayload

  constructor(private router: Router , 
              private auth: AuthenticationService) {
                
               }

 public user: Iuser = {
    name: '',
    email: '',
    contact: '', 
  };             

  //lista
  // sexes=[
  //   {name: 'F', isChecked: false },
  //   {name: 'M', isChecked: false},
  // ];

  back(){
    this.router.navigate(['pacient-dashboard']);
  }

  ngOnInit() {
    // if( this.auth.isUserLoggedIn() ){
    //   this.details = this.auth.getUserInf();
    // } else {
    // console.log('niciun user logat')
    // this.router.navigateByUrl('login'); }


    this.auth.profile().subscribe(user => {
      if (user) {
        this.user = user;
        console.log('USER', user);
      }
    })

    }



    // this.auth.profile().subscribe(
    //  user => {
    //     this.details = user
      // },
      // err => {
      //   console.error(err)
      // }
    //  }
    // )
  // }

  
}
