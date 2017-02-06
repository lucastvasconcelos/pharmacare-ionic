import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormGroup,FormControl} from '@angular/forms';
import {QuizzPage} from '../quizz/quizz';

@Component({
  selector: 'page-anatomia',
  templateUrl: 'anatomia.html'
})
export class AnatomiaPage {
  regioes;
  regioesForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.regioesForm = new FormGroup({
      "regioes": new FormControl({value: 'none',disabled:false})
    });
  }

open_questoes(){
  var valor_radio = (this.regioesForm.value);
  valor_radio = JSON.stringify(valor_radio);
  console.log(valor_radio);
  var posicao = valor_radio.indexOf(':');
  var tamanho = valor_radio.length;
  valor_radio = (valor_radio.slice(posicao+2,tamanho-2));
  console.log(valor_radio);
  if(valor_radio!='none'){
  this.navCtrl.push(QuizzPage,{item:valor_radio});
  }
}
}
