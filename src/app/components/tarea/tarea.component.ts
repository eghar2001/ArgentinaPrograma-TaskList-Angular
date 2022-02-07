import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() unaTarea:Tarea;
  @Input() index:number;
  @Output() clickEditar= new EventEmitter<number>();
  constructor(private rutas:Router) { }
  cargaEditar(){
    this.clickEditar.emit(this.index);
    this.rutas.navigate(['/edit',this.index])
  }
  

  ngOnInit(): void {
  }

}
