import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DarumaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DarumaServiceProvider {
  public darumaUrl: string;

  constructor(public http: HttpClient) {
    //console.log('Hello DarumaServiceProvider Provider');
    //produccion
    //this.darumaService = "http://koinobori-artesanias.com/darumas/public/";
    //Proxy pruebas
    this.darumaUrl = "/darumaService/";
  }

  getDatos(){
    console.log(this.http.get("http://localhost/darumas/public/loginApp/login"));

  }

}
