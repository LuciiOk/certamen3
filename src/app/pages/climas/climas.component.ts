import { Component, OnInit } from '@angular/core';
import { listaRegiones, Region } from 'src/app/region';
import { ActivatedRoute } from '@angular/router';
import { Clima } from 'src/app/clima';

@Component({
  selector: 'app-climas',
  templateUrl: './climas.component.html',
  styleUrls: ['./climas.component.scss']
})
export class ClimasComponent implements OnInit {
  listaRegion:Region[] = listaRegiones;
  celsius:boolean= true;
  listaClima:Clima[] = []
  
  constructor(private rutaActiva:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listaClima = this.listaRegion
      .find((element:Region) => element.nombre == this.rutaActiva.snapshot.params.id)?.clima || []
    console.log(this.rutaActiva.snapshot.params.id)
    console.log(this.listaClima)
  }
}
