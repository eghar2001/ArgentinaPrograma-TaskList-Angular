import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from './app.tarea.model';
import { TareasService } from './servicios/tareas/tareas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas:Tarea[];
  routerOutlet=document.getElementById('routerOutlet');
  
  constructor(private misTareas:TareasService,private rutas:Router){
    this.tareas=this.misTareas.getTareas();
    this.formActivado=false;
  }
  formActivado:boolean;
  mostrarAddTask(){
    this.rutas.navigate(['/addTask']);
    this.formActivado=true
  }
  cerrarAddTask(){
    this.rutas.navigate(['']);
    this.formActivado=false
  }
  eliminaTarea(index:number){
    this.misTareas.eliminaTarea(index)
  }
  editarTarea(index:number){
    this.formActivado=true;
    this.rutas.navigate(['/edit',index])
    
  }

}

