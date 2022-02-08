import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() botonFormulario = new EventEmitter<boolean>();
  @Input() formActivado:boolean;
  constructor(private misRutas:Router) { 
    
  }
  mostrarAddTask(){
    this.botonFormulario.emit(true);
    this.misRutas.navigate(['/addTask']);
  }
  cerrarAddTask(){
    this.botonFormulario.emit(false);
  }
  

  ngOnInit(): void {
  }

}
