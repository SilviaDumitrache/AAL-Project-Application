import { Component, OnInit } from '@angular/core';
import { Health, HealthData } from '@ionic-native/health/ngx';
import { Platform, NavController} from '@ionic/angular';
// import { GooglefitService } from '../services/googlefit.service';

@Component({
  selector: 'app-smart-med',
  templateUrl: './smart-med.page.html',
  styleUrls: ['./smart-med.page.scss'],
})
export class SmartMedPage implements OnInit {

  steps = 'no data';

  constructor(private platform: Platform,
              private health: Health,
              private navC: NavController) { 
                
               if(this.platform.ready())
               this.health.isAvailable()
               .then((available:boolean) => {
                 console.log(available);
                 this.health.requestAuthorization([
                  'distance' , 'nutrition', //permisiuni de citire/scriere 
                  {
                    read: ['steps'],
                    write: ['height', 'weight']
                  } 
                 ])
                 .then(res => console.log(res))
                 .catch(e => console.log(e));
               })
               .catch(e => console.log(e));

              //  this.health.query({
              //    startDate: new Date(new Date().getTime() -3*24*60*60*1000), 
              //    endDate: new Date(),
              //    dataType: 'steps'
              //  }).then((value: HealthData) => {
              //    console.info('inainte de conversie')
              //    console.info('inainte de loop')
              //    for (let val in value) {
              //      console.info("Health Data data " + JSON.stringify(value[val].value))
              //     console.info( "Health Data data " + JSON.stringify(value[val]))
              //    }
              //  }).catch
               
              
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


