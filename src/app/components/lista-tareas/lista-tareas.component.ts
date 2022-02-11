import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
  animations:[
    trigger('sube-baja',[
      
      state('bajado',style({
        transform:'translateY(320px)'
      })),
      state('subido',style({
        transform:'translateY(0)'
      })),
      state('vuelve',style({
        transform:'translateY(-320px)'
      })),
      transition('subido => bajado',animate('0.199999s')),
      transition('subido => vuelve',animate('0.199999s'))
    ]),
      
    
    ]
})
export class ListaTareasComponent implements OnInit {
  
  tareas:Tarea[]
  editar:boolean;
  formActivado:boolean;
  animForm:boolean;
  tareaEdit:Tarea;
  lastIdDisp:number;
  animLista:number =3;
  constructor(private misTareas:TareasService) {
   
   }
   ngOnInit(): void {
    this.misTareas.getTareas().subscribe((tasks)=>
      this.tareas = tasks
    );
    this.editar = false;
    this.formActivado=false;
    this.animLista = 1;
    this.lastIdDisp = this.tareas[(this.tareas.length)-1].id + 1;
   
  }   
  mostrarAddTask(){
    this.animLista=2;
    setTimeout(()=>this.animLista=1,200);
    setTimeout(()=>{
      this.formActivado=true; 
      this.animForm=true
      
    },200);    
  }
  cerrarAddTask(){
    this.animForm = false;
    this.animLista =3;
    setTimeout(()=>this.animLista=1,200);

    
    setTimeout(()=>{this.formActivado=false},220)
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
      this.mostrarAddTask()
      
    }
    else{
      this.cerrarAddTask();
    }
   
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
   

  }
  
  editarTarea(tarea:Tarea){
    
    this.editar=true;
    this.mostrarAddTask();
    this.tareaEdit=tarea;
    
    
    
  }

}
