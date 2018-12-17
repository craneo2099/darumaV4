import { AjustesPage } from './../pages/ajustes/ajustes';
import { AcercaPage } from './../pages/acerca/acerca';
import { AddDarumaQrPage } from './../pages/add-daruma-qr/add-daruma-qr';
import { InicioLoginPage } from '../pages/inicio-login/inicio-login';
import { DarumasGralPage } from './../pages/darumas-gral/darumas-gral';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage:any;
  public pages: Array<{titulo: string, color: string,
    componente: any, icon: string}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = InicioLoginPage;
    this.pages = [

        {titulo: "Mis Darumas", color: "azul", componente: DarumasGralPage, icon: "home"},
        {titulo: 'Agregar Daruma', color: "azul", componente: AddDarumaQrPage, icon: 'qr-scanner'},
        {titulo: 'Acerca de', color: "azul", componente: AcercaPage, icon: 'information-circle'},
        {titulo: "Ajustes", color: "azul", componente: AjustesPage, icon: "settings"},
        {titulo: "Salir", color: "rosa3", componente: InicioLoginPage, icon: "log-out"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

