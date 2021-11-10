import { Injectable } from '@angular/core';
import { Clima } from '../clima';
import { Region } from '../region';
import {climas} from './Climas.cost'

@Injectable({
  providedIn: 'root'
})
export class ClimasService {

  private climas:Region[] = climas;
  grado:boolean = true;

  constructor() { }

  getClimas():Region[]{
    return this.climas;
  }

  getConvert() {
    return this.grado;
  }

  convert(valor:boolean) {
    console.log(this.grado)
    this.grado = valor;
  }



  actualizarClimas(climasActualizar:any) {
    climas.forEach((region:Region) => {
      if (region.nombre == climasActualizar.Region)
        region.clima.forEach((clima:Clima) => {
          if (clima.dia == climasActualizar.Dia) {
            clima.dia = climasActualizar.Dia;
            clima.clima = climasActualizar.Estado;
            clima.temperatura = climasActualizar.Temperatura;
          }
        })
    })
  }
}
