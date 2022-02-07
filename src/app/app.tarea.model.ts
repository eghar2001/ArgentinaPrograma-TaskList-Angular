import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { OnInit } from "@angular/core";
import { Fecha } from "./app.fecha.model";

export class Tarea {
    private titulo:string;
    private fechaLimite:Fecha;
    constructor(titulo:string,fecha:Fecha){
        this.titulo=titulo;
        this.fechaLimite=fecha;
    }
    public getTitulo(){
        return this.titulo;
    }
    public getFechaLimite(){
        return this.fechaLimite;
    }
    public setTitulo(title:string){
        this.titulo = title;
    }
    public setFechaLimite(fecha:Fecha){
        this.fechaLimite = fecha;
    }
    

    

   
    
}