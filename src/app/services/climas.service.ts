import { Injectable } from '@angular/core';
import { Clima } from '../clima';
import { Region } from '../region';
import {climas} from './Climas.cost'

@Injectable({
  providedIn: 'root'
})
export class ClimasService {

  private climas:Region[] = climas;

  constructor() { }

  getClimas():Region[]{
    return this.climas;
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
