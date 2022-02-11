import { Component } from '@angular/core';
import { ManejoTareasComponent } from './components/manejo-tareas/manejo-tareas.component';
import { Fecha } from './modelos/app.fecha.model';
import { Tarea } from './modelos/app.tarea.model';
import { TareasService } from './servicios/tareas/tareas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(private misTareas:TareasService){
    
    
  }
 
  
}

