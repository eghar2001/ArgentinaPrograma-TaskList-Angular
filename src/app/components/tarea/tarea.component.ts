
import { Component, Input, OnInit, Output } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';

import { Tarea } from 'src/app/modelos/app.tarea.model';
import { EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';
import { Fecha } from 'src/app/modelos/app.fecha.model';
const duracionAnim:string='2s'
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  animations: [
    trigger('open-deleted',[
      state('*',style({
        transform:'translateX(-100%)'
      })),
      state('open',style({
        transform: 'translateX(0)'
      })),
      state('deleted',style({
        transform: 'scale(0.5)'
      })),
      transition('* => open',
      animate('0.2s')),
      transition('open => deleted',
      animate('0.2s ease-out'))
    ])
    
    ]
  
})
export class TareaComponent implements OnInit {
  @Input() unaTarea:Tarea;
 
  @Output() onEditar= new EventEmitter<Tarea>();
  @Output() onDelete = new EventEmitter<Tarea>();
  fechaLimite:Fecha;
  estadoAnimTask:number;
 
  constructor(private misTareas:TareasService) { 
    this.estadoAnimTask=1;
  }
  cargaEditar(){
    this.onEditar.emit(this.unaTarea);
  }
  eliminaTarea(){
    this.estadoAnimTask=3;
    setTimeout(()=>this.onDelete.emit(this.unaTarea),210)
  }

  ngOnInit(): void {
    this.estadoAnimTask=2;
    this.fechaLimite = new Fecha(this.unaTarea.fechaLimite.dia,this.unaTarea.fechaLimite.mes,this.unaTarea.fechaLimite.anio)
  }

}
