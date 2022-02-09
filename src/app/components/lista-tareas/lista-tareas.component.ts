import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Tarea } from 'src/app/modelos/app.tarea.model';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input()
  @Output() activaFormulario = new EventEmitter<number>();
  tareas:Tarea[]
  constructor(private misTareas:TareasService) {
    this.tareas=this.misTareas.getTareas();
   }
   editarTarea(index:number){
    
    this.activaFormulario.emit(index);
 
    
  }

  
  ngOnInit(): void {
  }

}
