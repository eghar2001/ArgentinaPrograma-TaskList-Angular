import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
 
})
export class ListaTareasComponent implements OnInit {
  
  
  tareas:Tarea[]
  editar:boolean;
  formActivado:boolean;
  animForm:boolean;
  tareaEdit:Tarea;
  lastIdDisp:number;
  
  constructor(private misTareas:TareasService) {
   
   }
   ngOnInit(): void {
    this.misTareas.getTareas().subscribe((tasks)=>
      this.tareas = tasks
    );
    this.editar = false;
    this.formActivado=false;
    this.animForm = false;
    this.lastIdDisp = this.tareas[(this.tareas.length)-1].id + 1;
   
  }   
  borrarTarea(tarea:Tarea){
    this.misTareas.eliminaTarea(tarea).subscribe(()=>{
      this.tareas = this.tareas.filter((t)=>t.id != tarea.id)
    })
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
      setTimeout(()=>{this.formActivado=false},220)
    }
   
  }
  mostrarAddTask(){
    
    this.formActivado=true;
    this.animForm = true;
    
  }
  private indexTarea(ind:number){
    let i=0;
    while(i<this.tareas.length && this.tareas[i].id !== ind){
      i++;
    }
    return i;
  
  }
 
  enviaForm(tarea:Tarea){   
    if (this.editar){
      this.misTareas.editarTarea(tarea).subscribe((t)=>{
        const indexT:number = this.indexTarea(t.id)
        alert(indexT);
        this.tareas.splice(indexT,1,tarea)
      }
      )
    }
    else{
      this.misTareas.agregarTarea(tarea).subscribe((t)=>{setTimeout(()=>(this.tareas.push(t)),800)})
      this.lastIdDisp++;
    }
    this.animForm=false;
    setTimeout(()=>{this.formActivado=false},520)

  }
  
  editarTarea(tarea:Tarea){
    
    this.editar=true;
    this.formActivado=true; 
    this.animForm=true;
    this.tareaEdit=tarea;
  }

}
