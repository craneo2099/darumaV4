import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ViewController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@IonicPage()
@Component({
  selector: 'page-add-daruma-qr',
  templateUrl: 'add-daruma-qr.html',
})
export class AddDarumaQrPage {
  private isBackMode: boolean = false;
  private isFlashLightOn: boolean = false;
  private scanSub: any ;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: QRScanner,
    //private modalController: ModalController,
    private toastCtrl: ToastController,
    public viewController: ViewController) {
  }

// scan(){
//   // Optionally request the permission early
//   this.qrScanner.prepare()
//   .then((status: QRScannerStatus) => {
//     if (status.authorized) {
//       // camera permission was granted

//       console.log("ENTRA qr");

//       // start scanning
//       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//         console.log('Scanned something', text);
//         console.log("entra start");

//         this.qrScanner.hide(); // hide camera preview
//         scanSub.unsubscribe(); // stop scanning
//       });

//     } else if (status.denied) {
//       console.log("denegado P");

//       // camera permission was permanently denied
//       // you must use QRScanner.openSettings() method
//       // to guide the user to the settings page
//       // then they can grant the permission from there
//     } else {
//       console.log("solo denegado");

//       // permission was denied, but not permanently.
//       // You can ask for permission again at a later time.
//     }
//   })
//   .catch((e: any) => console.log('Error is', e));
// }

//   ionViewDidLoad() {
// this.scan();
//     console.log('QR Cargado');
//   }

ionViewWillEnter(){
  this.showCamera();
  // Optionally request the permission early
  this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        console.log('Camera Permission Given');

        // start scanning
        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log("Info QR: ", text);

          this.presentToast(text);
        });
        // show camera preview
        this.qrScanner.show();
        console.log("Info 2 QR: ", this.qrScanner.show());
        // wait for user to scan something, then the observable callback will be called

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
        //alert
        console.log('Camera permission denied');
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
        console.log('Permission denied for this runtime.');
      }
    })
    .catch((e: any) => console.log('Error is', e));
}

closeModal() {
  //this.navCtrl.pop();
  this.viewController.dismiss();
}


toggleFlashLight(){

  /** Default isFlashLightOn is false ,
   * enable it if false **/
  //console.log("flashI: ", this.isFlashLightOn);
  this.isFlashLightOn = !this.isFlashLightOn;
  //console.log("flash2: ", this.isFlashLightOn);
  if(this.isFlashLightOn){
    this.qrScanner.enableLight();
    //console.log("flashEntra: ", this.isFlashLightOn);
  }
  else{
    this.qrScanner.disableLight();
    //console.log("Sino: ", this.isFlashLightOn);
  }

}
toggleCamera(){
  /** Toggle Camera , Default is isBackMode is true , toggle
   * to false to enable front camera and vice versa.
   *
   * @type {boolean}
   */
  console.log("camO", this.isBackMode);
  this.isBackMode =  !this.isBackMode;
  console.log("camN", this.isBackMode);
  if(this.isBackMode){
    this.qrScanner.useFrontCamera();
    console.log("camEntra", this.isBackMode);
  }
  else{
    this.qrScanner.useBackCamera();
    console.log("camSino", this.isBackMode);
  }
}

presentToast(text:string) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


ionViewWillLeave(){
  this.qrScanner.hide(); // hide camera preview
  this.scanSub.unsubscribe(); // stop scanning
  this.hideCamera();
}
showCamera() {
  (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
}

hideCamera() {
  (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
}

}
