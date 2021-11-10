import { Component, OnInit} from '@angular/core';
import { listaRegiones, Region } from 'src/app/region';
import { ClimasService } from 'src/app/services/climas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public climasService:ClimasService;
  listaRegion:Region[] = [];
  celsius:boolean= true;
  active:any;
  constructor(private servicio:ClimasService) { 
    this.climasService = new ClimasService();
  }

  ngOnInit(): void {
    this.listaRegion = this.climasService.getClimas();
    this.active = listaRegiones[0];
  }

  convertir(valor:boolean) {
      if (this.celsius !== valor) {
        this.celsius = valor;
        this.servicio.convert(this.celsius);
      }
      
  }
}
