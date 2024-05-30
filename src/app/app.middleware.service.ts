import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';
import { Cita } from './cita/cita';

@Injectable({
    providedIn: 'root'
})
export class MiddleWareService {
    private apiUrl ='http://localhost:8863/api/cliente';

    constructor(private http: HttpClient){}

    getClientes(){
        return this.http.get<Cliente[]>(this.apiUrl);
    }

    getCitas(){
        return this.http.get<Cita[]>(this.apiUrl);
    }

}