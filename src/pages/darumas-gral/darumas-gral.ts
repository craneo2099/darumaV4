import { DetalleDarumaPage } from './../detalle-daruma/detalle-daruma';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DarumasGralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-darumas-gral',
  templateUrl: 'darumas-gral.html',
})
export class DarumasGralPage {
  public userID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToDetalle(darumaId, userID){
    //Falta ID de usuario
    this.navCtrl.push(DetalleDarumaPage, {
      darumaId: darumaId,
      userID: userID
    });
    console.log(darumaId, userID);

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DarumasGralPage');
  }

}
