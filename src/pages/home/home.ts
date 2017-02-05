import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AnatomiaPage } from '../anatomia/anatomia'

import { HistologiaPage} from '../histologia/histologia'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  open_anatomia(){
    this.navCtrl.push(AnatomiaPage);
  }
  open_histologia(){
    this.navCtrl.push(HistologiaPage);
  }
}
