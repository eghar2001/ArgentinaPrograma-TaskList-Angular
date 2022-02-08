import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() unaTarea:Tarea;
  @Input() index:number;
  @Output() clickEditar= new EventEmitter();
  constructor(private rutas:Router,private misTareas:TareasService) { }
  cargaEditar(){
    this.clickEditar.emit();
    this.rutas.navigate(['/edit',this.index]);
  }
  eliminaTarea(){
    this.misTareas.eliminaTarea(this.index);
  }

  ngOnInit(): void {
  }

}
