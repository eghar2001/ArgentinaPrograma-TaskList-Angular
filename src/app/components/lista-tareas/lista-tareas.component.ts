import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input()
  @Output() activaFormulario = new EventEmitter();
  tareas:Tarea[]
  constructor(private misTareas:TareasService, private rutas:Router) {
    this.tareas=this.misTareas.getTareas();
   }
   editarTarea(){
    
    this.activaFormulario.emit()
 
    
  }

  
  ngOnInit(): void {
  }

}
