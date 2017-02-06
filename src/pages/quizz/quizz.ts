import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import {FormGroup,FormControl} from '@angular/forms';
import {FinalizarPage} from '../finalizar/finalizar';

/*
  Generated class for the Quizz page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html'
})
export class QuizzPage {
  item:any;
  lista: any[] = ['Frontal', 'Parietal', 'Esfenóide','Nasal','Romboide'];
  valor1: any = 'null';
  valor2: any = 'null';
  valor3: any = 'null';
  valor4: any = 'null';
  valor_botao:any;
  respostas;
  respostasForm;
  static valor_jogado: number = 1;
  imagem: string = "img/Cabeca"+QuizzPage.valor_jogado+".jpg";

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController) {
      this.navCtrl = navCtrl;
      this.item = navParams.get('item');
      this.respostasForm = new FormGroup({
        "respostas": new FormControl({value: 'none',disabled:false})
      });
  }
  setPages(){
    this.navCtrl.setPages([]);
  }

  ionViewDidLoad() {  
   
    if(QuizzPage.valor_jogado == 5){
      this.valor_botao = "Finalizar";
    }
    else{
     this.valor_botao = "Continuar"
    }
    this.valor1 = this.lista[Math.floor(Math.random() * 4)];
    this.lista.splice(this.lista.indexOf(this.valor1),1);       
    this.valor2 = this.lista[Math.floor(Math.random() * 3)];
    this.lista.splice(this.lista.indexOf(this.valor2),1);  
    this.valor3 = this.lista[Math.floor(Math.random() * 2)];
    this.lista.splice(this.lista.indexOf(this.valor3),1);
    this.valor4= this.lista[Math.floor(Math.random()* 1)];
  }

  next_question(){
    QuizzPage.valor_jogado++;
    console.log(QuizzPage.valor_jogado);
    if(QuizzPage.valor_jogado < 6){
      this.navCtrl.push(QuizzPage,{item:this.item});
    }else{
      QuizzPage.valor_jogado = 0;
      this.navCtrl.push(FinalizarPage);
    }

    }
  }

