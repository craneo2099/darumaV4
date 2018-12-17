import { DarumaServiceProvider } from './../../providers/daruma-service/daruma-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

//import { FormularioDarumaPage } from './../formulario-daruma/formulario-daruma';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { RecuperarPage } from '../recuperar/recuperar';


@IonicPage()
@Component({
  selector: 'page-inicio-login',
  templateUrl: 'inicio-login.html',
  providers: [DarumaServiceProvider]
})
export class InicioLoginPage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DarumaServiceProvider,
    public formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required,
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
          ])],
        password: ['']
      });
    }

  goToRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  goToRecuperar(){
    this.navCtrl.push(RecuperarPage);
  }
  //No va aqui
  gotoFormDaruma(){
    //this.navCtrl.push(FormularioDarumaPage);
  }

  logForm(){
    console.log(this.loginForm.value);

  }
  funcionPrueba(){
    this.ds.getDatos();
    //console.log(this.email.value);

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InicioLoginPage');
  }

}
