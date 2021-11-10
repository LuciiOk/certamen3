import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
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

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
