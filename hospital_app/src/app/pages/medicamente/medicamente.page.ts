import { Component, OnInit } from '@angular/core';
// import { ListItem } from "../shared-component/list/list.model";
import { ListItem } from 'src/app/shared-component/list/list.model';
import { Router } from '@angular/router';
// import { ApiService } from "src/app/api/api.service";


@Component({
  selector: 'app-medicamente',
  templateUrl: './medicamente.page.html',
  styleUrls: ['./medicamente.page.scss'],
})
export class MedicamentePage implements OnInit {
  public medicamente: Array<ListItem> = new Array<ListItem>();
  modAdm = "d";

  // private apiService: ApiService
  constructor(private router: Router , ) { 
    this.medicamente.push(new ListItem("Paracetamol", 23, "d"));
    this.medicamente.push(new ListItem("Raracetamol", 25, "d"));
  }


  ngOnInit() {
    // this.apiService.getAllMeds().subscribe(Response => {
    //   console.log(Response);
    // });
  }

  back(){
    this.router.navigate(['pacient-dashboard']);
  }

}
