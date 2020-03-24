import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-pacient-prog',
  templateUrl: './pacient-prog.page.html',
  styleUrls: ['./pacient-prog.page.scss'],
})
export class PacientProgPage implements OnInit {

  //va fi setata initial la data curenta
  // myDate = new Date().toISOString();

  // myDate: Date = new Date();
 

  // myDate: any= new Date().toISOString();

  myDate: any = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();

  // myTime: any= new Date().getHours.toISOString;
  // maxDate: any = new Date(new Date().setDate(new Date().getDate() + 10)).toISOString();


  constructor(private router:Router) 
  { 
    
  }
  
  ngOnInit() {
    
  }

  

  back(){
    this.router.navigate(['pacient-dashboard']);
  }

}
