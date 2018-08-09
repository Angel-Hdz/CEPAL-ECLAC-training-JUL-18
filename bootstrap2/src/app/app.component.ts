import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public item: object;
  public datosImportados;


  constructor(public http: Http) {
    /// Importa los datos externos
    this.importarJSON();
  }


  private importarJSON() {

    /// crea una instancia de this
    let _local = this;


    this.http.get('assets/json/datos_locales.json').subscribe(
      (datos: Response) => {
        ///_local.datosImportados = datos;

       // console.log(datos.json());

        _local.datosImportados = datos.json();
      }
    );


  }

  mostrarDatosEnCard(_objeto: object) {

    this.item = _objeto;
  }
}
