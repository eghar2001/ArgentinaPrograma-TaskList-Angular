import { Component } from '@angular/core';
import { Fecha } from './modelos/app.fecha.model';
import { Tarea } from './modelos/app.tarea.model';
import { TareasService } from './servicios/tareas/tareas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas:Tarea[];
  editar:boolean;
  formActivado:boolean;
  animForm:boolean;
  index:number;
  
  constructor(private misTareas:TareasService){
    this.tareas=this.misTareas.getTareas();
    this.formActivado=false;
    this.editar=false;
    this.index=0;
    this.animForm=false;
  }
  cambiaBoton(){
    this.formActivado=false;
  }
  estadoFormulario(estado:boolean){
    if(estado){
      this.editar=false;
      this.formActivado=true;
      this.animForm=true;
    }
    else{
      this.animForm = false;
      setTimeout(()=>{this.formActivado=false},520)
    }
   
  }
  mostrarAddTask(){
    
    this.formActivado=true;
    this.animForm = true;
    
  }
  fechaJson(){
    const fecha = new Fecha(24,12,1889);
    console.log(fecha.jsonifyFecha())
  }
  cerrarAddTask(){   
    this.animForm=false;
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

