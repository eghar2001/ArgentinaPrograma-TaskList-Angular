import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params} from '@angular/router';
import { Fecha } from 'src/app/modelos/app.fecha.model';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { TareasService } from '../../servicios/tareas/tareas.service';



@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
  modificarTarea:FormGroup;
  tarea:Tarea;
  index:number;
  constructor(private formBuilder:FormBuilder,private misTareas:TareasService,private parametroRutas:ActivatedRoute) { 
    this.parametroRutas.params.subscribe((params:Params)=>
    {const id = parseInt(params['id'].toString())
      this.tarea = misTareas.buscarTarea(id)
      this.index = id;
    })
    this.modificarTarea = this.formBuilder.group({
      titulo:[this.tarea.getTitulo(),[Validators.required]],
      diaLimite:[this.tarea.getFechaLimite().getDia(),[Validators.required,Validators.min(1),Validators.max(31)]],
      mesLimite:[this.tarea.getFechaLimite().getMes(),[Validators.required,Validators.min(1),Validators.max(12)]],
      anioLimite:[this.tarea.getFechaLimite().getAnio(),[Validators.required,Validators.min(1),Validators.max(2022)]]
    })
  }
  get Titulo(){
    return this.modificarTarea.get("titulo")
  }
  get Dia(){
    return this.modificarTarea.get("diaLimite")
  }
  get Mes(){
    return this.modificarTarea.get("mesLimite");
  }
  get Anio(){
    return this.modificarTarea.get("anioLimite")
  }

  ngOnInit(): void {
  }
  enviar(evento:Event){
    evento.preventDefault;
    if(this.modificarTarea.valid){
      const titulo:string = this.Titulo?.value;
      const dia:number = parseInt(this.Dia?.value);
      const mes:number = parseInt(this.Mes?.value);
      const anio:number = parseInt(this.Anio?.value);
      const tarea:Tarea = new Tarea(titulo, new Fecha(dia,mes,anio));
      this.misTareas.editarTarea(this.index,tarea);
      
    }
    else{
      this.modificarTarea.markAllAsTouched
    }
  }

}
