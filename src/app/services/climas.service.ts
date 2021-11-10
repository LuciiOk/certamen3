import { Injectable } from '@angular/core';
import { Clima } from '../clima';
import { Region } from '../region';
import {climas, celsius} from './Climas.cost'

@Injectable({
  providedIn: 'root'
})
export class ClimasService {

  private climas:Region[] = climas;
  grado:boolean = celsius;

  constructor() { }

  getClimas():Region[]{
    return this.climas;
  }

  getConvert():boolean {
    return this.grado;
  }

  convert(valor:boolean) {
    this.grado = valor
    if (!valor) {
      climas.forEach((region:Region) => {
        region.clima.forEach((clima:Clima) => {
          clima.temperatura = (clima.temperatura * 1.8) + 32;
        })
      })
    } else {
      climas.forEach((region:Region) => {
        region.clima.forEach((clima:Clima) => {
          clima.temperatura = (clima.temperatura - 32) / 1.8;
        })
      })
    }
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
