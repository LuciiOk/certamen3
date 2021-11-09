import { Component, OnInit } from '@angular/core';
import { listaRegiones, Region } from 'src/app/region';
import { ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-climas',
  templateUrl: './climas.component.html',
  styleUrls: ['./climas.component.scss']
})
export class ClimasComponent implements OnInit {
  listaRegion:Region[] = listaRegiones;
  celsius:boolean= true;
  active:any;

  constructor(private rutaActiva:ActivatedRoute) {
  }

  ngOnInit(): void {
    
  }
}
