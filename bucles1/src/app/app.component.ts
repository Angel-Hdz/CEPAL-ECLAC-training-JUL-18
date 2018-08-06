import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private paises: Array<string>;
  private poblacionMundial: Array<object>;
  private paisesMultidimensional: Array<any>;
  /// Sintaxis alterna
  /// private paises:  string [];

  constructor() {
    this.paises = ['Chile', 'China', 'Chipre'];

    this.paisesMultidimensional = [
      ['Chile', 'China', 'Chipre'],
      ['Dinamarca', 'Dubai', 'Damasco'],
      ['Ecuador', 'Egipto', 'España']
    ];


    this.poblacionMundial = [
      {
        nombreDePais: 'Chile',
        region: 1,
        poblacionGeneral: 17000000,
        poblacionPorSexo:
          { hombres: '40%', mujeres: '60%' },
        exportacionCobre: '99999',
        datoEjemplo: [1, 2, 3]
      }
      ,

      {
        nombreDePais: 'Chipre',
        region: 2,
        poblacionGeneral: 10000000,
        poblacionPorSexo:
          { hombres: '40%', mujeres: '60%' }
      }
      ,
      {
        nombreDePais: 'China',
        region: 3,
        poblacionGeneral: 100000000,
        poblacionPorSexo:
          { hombres: '40%', mujeres: '60%' }
      }

    ];
  }


  calculoPoblacion(_hombres: number, _poblacion: number) {

    let resultado = _hombres * _poblacion  ;

    return resultado;
  }

}
