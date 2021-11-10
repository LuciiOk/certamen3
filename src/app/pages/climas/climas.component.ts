import { Component, Input, OnInit } from '@angular/core';
import { listaRegiones, Region } from 'src/app/region';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Clima } from 'src/app/clima';
import { ClimasService } from 'src/app/services/climas.service';

@Component({
  selector: 'app-climas',
  templateUrl: './climas.component.html',
  styleUrls: ['./climas.component.scss']
})
export class ClimasComponent implements OnInit {
  public climasService:ClimasService;
  listaRegion:Region[] = [];
  celsius:any;
  region:string = '';
  listaClima:Clima[] = []

  constructor(private rutaActiva:ActivatedRoute) {
    this.climasService = new ClimasService();
  }

  ngOnInit(): void {
    this.listaRegion = this.climasService.getClimas();
    this.celsius = this.climasService.getConvert()
    console.log(this.celsius)
    this.rutaActiva.paramMap.subscribe((params:ParamMap) =>{
      
      this.region = params.get('region') || ''
      this.listaClima = this.listaRegion
      .find((element:Region) => element.nombre === params.get('region'))?.clima || []
    })
  }
}
