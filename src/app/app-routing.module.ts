import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ClimasComponent } from './pages/climas/climas.component';

const routes: Routes = [
  {path: 'actualizar/:region/:dia', component:ActualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
