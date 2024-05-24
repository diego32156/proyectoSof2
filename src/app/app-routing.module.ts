import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BancoComponent } from './banco/banco.component';
import { CitaComponent } from './cita/cita.component';


const routes: Routes = [
  {
    path: '',
    component: BancoComponent
  },
  {
    path: 'empleado',
    component: EmpleadosComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent

  },
  {
    path: 'citas-Banco',
    component: CitaComponent
  },
  // {
  //   path: 'registrar',
  //   component: RegisterComponent
  // },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
