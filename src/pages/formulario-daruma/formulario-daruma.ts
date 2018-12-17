import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormularioDarumaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario-daruma',
  templateUrl: 'formulario-daruma.html',
})
export class FormularioDarumaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  crearDaruma(){
    console.log("crea daruma");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioDarumaPage');
  }

}
