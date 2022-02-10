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
  index:number;
  
  constructor(private misTareas:TareasService){
    this.tareas=this.misTareas.getTareas();
    this.formActivado=false;
    this.editar=false;
    this.index=0;
  }
  cambiaBoton(){
    this.formActivado=false;
  }
  estadoFormulario(estado:boolean){
    
    this.formActivado=estado;
    if(estado){
      this.editar=false;
    }
  }
  mostrarAddTask(){
    this.formActivado=true;

  }
  calculaFecha(){
    const fecha = new Fecha(15,3,2020);
    alert(fecha.diasDiferencia());
  }
  cerrarAddTask(){
   
    this.formActivado=false
  }
  eliminaTarea(index:number){
    this.misTareas.eliminaTarea(index)
  }
  editarTarea(index:number){
    this.index = index;
    this.editar=true;
    this.formActivado=true; 
    
  }


}

