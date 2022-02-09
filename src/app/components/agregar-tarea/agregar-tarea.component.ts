
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Fecha } from 'src/app/modelos/app.fecha.model';
import { Tarea } from 'src/app/modelos/app.tarea.model';

import { TareasService } from 'src/app/servicios/tareas/tareas.service';


@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  agregarTarea:FormGroup;
  diasMaximos:number=31;
  fechaActual:Fecha;
  actualizaDiasMaximos(){
    this.diasMaximos = Fecha.cantidadDias(this.Mes?.value);
 
  }
  ngOnInit(): void {
    
  }
 

  constructor(private formBuilder:FormBuilder,private misTareas:TareasService) { 
    this.fechaActual = Fecha.FechaActual;
    this.agregarTarea = this.formBuilder.group({
      titulo:['',[Validators.required]],
      diaLimite:[null,[Validators.required,Validators.min(1)]],
      mesLimite:[null,[Validators.required,Validators.min(1),Validators.max(12)]],
      anioLimite:[null,[Validators.required,Validators.min(this.fechaActual.getAnio())]]
    })
  }
  
  get Titulo(){
    return this.agregarTarea.get("titulo")
  }
  get Dia(){
    return this.agregarTarea.get("diaLimite")
  }
  get Mes(){
    return this.agregarTarea.get("mesLimite");
  }
  get Anio(){
    return this.agregarTarea.get("anioLimite")
  }
 
  mesValido(mes:number,anio:number):boolean{
    //Retorna booleano diciendo si el mes ingresado es valido
    if (anio>this.fechaActual.getAnio()){
        return true;
    }
    else if(anio<this.fechaActual.getAnio()){
        return false;
    }
    else{
        return mes>= this.fechaActual.getMes()
    }
  }
  diaValido(dia:number,mes:number,anio:number):boolean{
    let resultado: boolean
    if (anio<Fecha.FechaActual.getAnio()){
       resultado = false;
        
    }
    else if(anio>Fecha.FechaActual.getAnio()){
        resultado=true;
        
    }
    else{
        if(mes < Fecha.FechaActual.getMes()){
          resultado= false;
          
        }
        else if(mes > Fecha.FechaActual.getMes()){
          resultado= true
          
        }
        else{
            resultado = (dia >= Fecha.FechaActual.getDia())        
           
        }
    }
    return resultado;
        
}

  
  enviar(evento:Event){
    evento.preventDefault;
    const anio:number = this.Anio?.value;
    const mes:number = this.Mes?.value;
    const dia:number = this.Dia?.value;
    
    
    if(this.agregarTarea.valid &&this.mesValido(mes,anio) &&  (this.diaValido(dia,mes,anio)) )  {
      const titulo:string = this.Titulo?.value;
      const fechaIngresada = new Fecha(dia,mes,anio);
      const tarea:Tarea = new Tarea(titulo, fechaIngresada);
      this.misTareas.agregarTarea(tarea);
    }
    else{
      this.agregarTarea.markAllAsTouched
    }
  }

}
