import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { OnInit } from "@angular/core";
import { Fecha } from "./app.fecha.model";

export interface Tarea {
    id:number,
    titulo:string;
    fechaLimite:{
        dia:number,
        mes:number,
        anio:number
    };
    reminder:boolean;    
}