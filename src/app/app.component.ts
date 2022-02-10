import { Component } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { Fecha } from './modelos/app.fecha.model';
import { Tarea } from './modelos/app.tarea.model';
import { TareasService } from './servicios/tareas/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  tareas:Tarea[];
  editar:boolean;
  formActivado:boolean;
  index:number;
  animForm:boolean;
  
  constructor(private misTareas:TareasService){
    this.tareas=this.misTareas.getTareas();
    this.formActivado=false;
    this.animForm=false;
    this.editar=false;
    this.index=0;
  }
  cambiaBoton(){
    this.formActivado=false;
  }
  estadoFormulario(estado:boolean){
    if (!estado){
      this.animForm=false;
      setTimeout(()=>{this.formActivado=false},520)
    }
    else{
    
      this.formActivado=true;
      this.animForm=true;
      this.editar=false;
    }
  
    
    
  }
  mostrarAddTask(){
    this.formActivado=true;
    this.animForm = true;
    

  }
  cerrarAddTask(){
    this.animForm=false
    setTimeout(()=>{this.formActivado=false},520)
  }
  eliminaTarea(index:number){
    this.misTareas.eliminaTarea(index)
  }
  editarTarea(index:number){
    this.index = index;
    this.editar=true;
    this.formActivado=true; 
    this.animForm=true;
    
  }


}

