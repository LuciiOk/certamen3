import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ClimasComponent } from './pages/climas/climas.component';

const routes: Routes = [
  {path: 'climas/:region', component:ClimasComponent},
  {path: 'actualizar/:region/:dia', component:ActualizarComponent},
  {path: 'actualizar/:region/:dia/:con', component:ActualizarComponent},
  {path: '**', redirectTo: 'climas/Valparaiso', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
