import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleDarumaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-daruma',
  templateUrl: 'detalle-daruma.html',
})
export class DetalleDarumaPage {
  public darumaId: number;
  public userID:   number;
  public estatus: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      //console.log(navParams.get("darumaId"));
      this.darumaId = navParams.get("darumaId");
      this.userID = navParams.get("userID");
      //cambia segun estado
      this.estatus = 1;

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetalleDarumaPage');
    console.log("detalle: ", this.darumaId, this.userID);

  }

}
