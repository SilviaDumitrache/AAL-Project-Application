import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from 'src/app/service/authentication.service'
 
@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage implements OnInit {
  message = '';
  messages = [];
  currentUser = '';
 
  constructor(private socket: Socket, 
              private toastCtrl: ToastController,
              private router: Router,
              private auth: AuthenticationService) { }
 
  ngOnInit() {
    this.socket.connect();
 
    // let name = `user-${new Date().getTime()}`;
    // let name = ``;
  
    this.currentUser = name;
    
    this.socket.emit('set-name', name);
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        // this.showToast('User joined: ' + user);
        this.showToast('V-ati alaturat chatului')
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
  }
 
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
  }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  back(){
    this.router.navigate[('pacient-dashboard')];
  }
}