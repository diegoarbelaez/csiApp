import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-submenu1',
  templateUrl: './submenu1.page.html',
  styleUrls: ['./submenu1.page.scss'],
})
export class Submenu1Page implements OnInit {

  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', {animated:true});
  }

}
