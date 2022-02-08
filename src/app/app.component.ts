import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fecha } from './modelos/app.fecha.model';
import { Tarea } from './modelos/app.tarea.model';
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
  public cambiaBoton(){
    this.formActivado=true;
  }
  estadoFormulario(estado:boolean){
    this.formActivado=estado;
  }
  mostrarAddTask(){
    this.rutas.navigate(['/addTask']);
    this.formActivado=true
  }
  cerrarAddTask(){
   
    this.formActivado=false
  }
  eliminaTarea(index:number){
    this.misTareas.eliminaTarea(index)
  }
  editarTarea(){
    this.formActivado=true; 
  }
  calcularDias(){
    const fecha1 = new Fecha(24,12,1889);
    const fecha2 = new Fecha(8,2,2022);
    alert(fecha1.diasDiferencia(fecha2));
    
  }

}

