import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { MiddleWareService } from '../app.middleware.service';
import { Cita } from '../cita/cita';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  citas: Cita[] = [];

  constructor(private middleWareService: MiddleWareService) {}

  ngOnInit(): void {
    this.obtenerClientesYcitas();
  }

  obtenerClientesYcitas() {
    this.middleWareService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
        this.middleWareService.getCitas().subscribe(
          (citas: Cita[]) => {
            this.citas = citas;
            this.asociarCitasAClientes();
          },
          (error) => {
            console.error('Error al obtener las citas:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

  asociarCitasAClientes() {
    this.clientes.forEach(cliente => {
      cliente.citas = this.citas.filter(cita => cita.idCita === cliente.cedula);
    });
  }
}
