import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { HeaderComponent } from './components/header/header.component';
import { DiasComponent } from './components/dias/dias.component';
import { ClimasComponent } from './pages/climas/climas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarComponent,
    HeaderComponent,
    DiasComponent,
    ClimasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
