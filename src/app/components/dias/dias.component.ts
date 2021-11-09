import { Component, Input, OnInit } from '@angular/core';
import { Clima } from 'src/app/clima';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent implements OnInit {

  @Input()
  climas:any; 
  @Input()
  celsius:any;
  @Input()
  region:any;

  constructor() { }

  ngOnInit(): void {
  }

  celciusFahrenheit (temp:number):number {
    return (temp * 1.8) + 32;
  }
}
