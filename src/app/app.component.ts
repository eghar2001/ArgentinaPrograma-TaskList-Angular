import { Component } from '@angular/core';
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

