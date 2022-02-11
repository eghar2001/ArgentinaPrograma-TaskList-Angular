import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Fecha } from 'src/app/modelos/app.fecha.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onBotonForm = new EventEmitter<boolean>();
  @Input() formActivado:boolean;
  fechaActual:Fecha;
  constructor() { 
    
  }
  mostrarAddTask(){
    this.onBotonForm.emit(true);

  }
  cerrarAddTask(){
    this.onBotonForm.emit(false);
  }
  
  
  ngOnInit(): void {
      this.fechaActual = Fecha.FechaActual;
  }

}
