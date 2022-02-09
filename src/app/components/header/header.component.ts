import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Fecha } from 'src/app/modelos/app.fecha.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() botonFormulario = new EventEmitter<boolean>();
  @Input() formActivado:boolean;
  fechaActual:Fecha;
  constructor() { 
    
  }
  mostrarAddTask(){
    this.botonFormulario.emit(true);

  }
  cerrarAddTask(){
    this.botonFormulario.emit(false);
  }
  

  ngOnInit(): void {
      this.fechaActual = Fecha.FechaActual;
  }

}
