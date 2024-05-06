import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { MiddleWareService } from '../app.middleware.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes! : Cliente[];

  constructor( private middleWareService: MiddleWareService) {}
   

  ngOnInit(): void {

      this.obtenerClientes();
  }

  obtenerClientes() {
    this.middleWareService.getClientes().subscribe(
      (clientes: Cliente) => {
        clientes = clientes;
        console.log(clientes)
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

}
