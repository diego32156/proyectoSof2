import { Cita } from "../cita/cita";

export class Cliente{
    nombre!: string;
    apellido!: string; 
    cedula!: number;
    correoElectronico!: string;
    telefono!: string;
    citas!: Cita[];
}