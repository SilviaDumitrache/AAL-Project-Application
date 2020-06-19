import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientiService } from 'src/app/serv/pacienti.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.page.html',
  styleUrls: ['./pacienti.page.scss'],
})
export class PacientiPage implements OnInit {

  public pacienti = [];

  constructor(private router: Router,
              private pacientiServ: PacientiService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.pacientiServ.getPacienti()
    .subscribe(data  => this.pacienti = data);
  }

  back() {
    this.router.navigateByUrl('/medic-dashboard')
  }

  logout() {
    this.auth.logoutMed();
  }

}
