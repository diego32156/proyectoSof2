import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BancoComponent } from './banco/banco.component';
import { CitaComponent } from './cita/cita.component';
import { TipoServicioComponent } from './tipo-servicio/tipo-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EmpleadosComponent,
    BancoComponent,
    CitaComponent,
    TipoServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
