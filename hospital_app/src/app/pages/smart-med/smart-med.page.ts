import { Component, OnInit } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-smart-med',
  templateUrl: './smart-med.page.html',
  styleUrls: ['./smart-med.page.scss'],
})
export class SmartMedPage implements OnInit {

  constructor(private platform: Platform,
              private health: Health) { 
                this.health.requestAuthorization([
                  'distance', //permisiuni rd/wr
                  {
                    read: ['step', 'height', 'weight'], //rd only perms.
                    write: ['height', 'weight'] //wr only perms.
                  }
                ])
                .then(res => console.log("response" + res))
                .catch(e => console.log("error" +e));
             
                this.health.query({
                  startDate: new Date(new Date().getTime() - 10*24*60*60*1000 ), 
                  // ten days ago
                  endDate: new Date(), // now
                  dataType: 'steps',
                  limit: 1000
                }).then(data=>{
                  console.log(data);
                }).catch(e => {
                  console.log("error "+ e);
                }) 
              }

  ngOnInit() {
    this.checkPlatformReady();
  }

  async checkPlatformReady(){
    const ready = !!await this.platform.ready();
    if (ready) {
      //code
    }  }


  // this.health.isAvailable().then((available:boolean) => {
  //   console.log(avaible);
  //   this.health.requestAuthorization([
  //     'distance', 'pulse', 
  //     {
  //       read: ['steps'],
  //       write: ['height' , 'weight']
  //     }
  //   ])
  //   .then(res => console.log(res))
  //   .catch(e => console.log(e));
  // })
  // .catch(e => console.log(e));

}


