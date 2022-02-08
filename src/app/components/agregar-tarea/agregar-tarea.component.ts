
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
  diasMaximos:number=0;
  constructor(private formBuilder:FormBuilder,private misTareas:TareasService) { 

    this.agregarTarea = this.formBuilder.group({
      titulo:['',[Validators.required]],
      diaLimite:[null,[Validators.required,Validators.min(1),Validators.max(this.diasMaximos)]],
      mesLimite:[null,[Validators.required,Validators.min(1),Validators.max(12)]],
      anioLimite:[null,[Validators.required,Validators.min(1),Validators.max(2022)]]
    })
  }
  actualizaDiasMaximos(){
    this.diasMaximos = Fecha.cantidadDias(this.Mes?.value);
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

  ngOnInit(): void {
  }
  enviar(evento:Event){
    evento.preventDefault;
    if(this.agregarTarea.valid){
      const titulo:string = this.Titulo?.value;
      const dia:number = parseInt(this.Dia?.value);
      const mes:number = parseInt(this.Mes?.value);
      const anio:number = parseInt(this.Anio?.value);
      const tarea:Tarea = new Tarea(titulo, new Fecha(dia,mes,anio));
      this.misTareas.agregarTarea(tarea);
    }
    else{
      this.agregarTarea.markAllAsTouched
    }
  }

}
