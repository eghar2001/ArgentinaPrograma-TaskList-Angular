import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { OnInit } from "@angular/core";
import { Fecha } from "./app.fecha.model";

export class Tarea {
    private titulo:string;
    private fechaLimite:Fecha;
    private reminder:boolean;
    constructor(titulo:string,fecha:Fecha,reminder:boolean){
        this.titulo=titulo;
        this.fechaLimite=fecha;
        this.reminder=reminder;
    }
    public getTitulo(){
        return this.titulo;
    }
    public getFechaLimite(){
        return this.fechaLimite;
    }
    public getReminder(){
        return this.reminder
    }
    public setTitulo(title:string){
        this.titulo = title;
    }
    public setFechaLimite(fecha:Fecha){
        this.fechaLimite = fecha;
    }
    public setReminder(reminder:boolean){
        this.reminder = reminder;
    }
    
    

    

   
    
}