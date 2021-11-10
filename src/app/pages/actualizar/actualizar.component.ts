import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ClimasService } from 'src/app/services/climas.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  formulario:FormGroup;
  public climasService:ClimasService;
  constructor(private Form:FormBuilder, private rutaActiva:ActivatedRoute, private ruta:Router) {
    this.climasService = new ClimasService();
    this.formulario = this.Form.group({
      Region:[this.rutaActiva.snapshot.params.region, [Validators.required]],
      Estado: [false,[Validators.required]],
      Dia:[this.rutaActiva.snapshot.params.dia,[Validators.required]],
      Temperatura:['',[Validators.required, Validators.pattern(/[0-9]/)]],
      Grados:[false,[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((  params:ParamMap) => {
      console.log(params.get('region'))
    })
  }

  enviarDatos(){
    this.climasService.actualizarClimas(this.formulario.value);
    this.ruta.navigate(['/climas'])
  }
}
