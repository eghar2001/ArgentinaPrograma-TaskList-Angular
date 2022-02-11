
import { Component, Input, OnInit, Output } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';

import { Tarea } from 'src/app/modelos/app.tarea.model';
import { EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';
import { Fecha } from 'src/app/modelos/app.fecha.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() unaTarea:Tarea;
 
  @Output() onEditar= new EventEmitter<Tarea>();
  @Output() onDelete = new EventEmitter<Tarea>();
  fechaLimite:Fecha;
  constructor(private misTareas:TareasService) { }
  cargaEditar(){
    this.onEditar.emit(this.unaTarea);
  }
  eliminaTarea(){
    this.onDelete.emit(this.unaTarea)
  }

  ngOnInit(): void {
    this.fechaLimite = new Fecha(this.unaTarea.fechaLimite.dia,this.unaTarea.fechaLimite.mes,this.unaTarea.fechaLimite.anio)
  }

}
