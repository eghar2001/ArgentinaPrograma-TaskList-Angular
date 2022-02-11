
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Fecha } from 'src/app/modelos/app.fecha.model';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { TareasService } from 'src/app/servicios/tareas/tareas.service';



@Component({
  selector: 'app-manejo-tareas',
  templateUrl: './manejo-tareas.component.html',
  styleUrls: ['./manejo-tareas.component.css'],
  animations:[
    trigger('openClose',[
      state('*',style({
        
        transform:'translateX(-100%)',
        
        
      })),
      state('open',style({
      display:'block',
        transform:'translateX(0)'
        
        
      })),
      transition('* => open',[
        animate('0.5s ease-in')
      ]),
      transition('open => *',[
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class ManejoTareasComponent implements OnInit {
  @Input() editar:boolean;
  @Input() unaTarea:Tarea;
  @Input() animForm:boolean;
  @Input() lastId:number;
  @Output() cierraForm = new EventEmitter<Tarea>();
  manejarTareas:FormGroup;
  diasMaximos:number=31;
  fechaActual:Fecha;
  
  
  reminder:boolean = false;
  actualizaDiasMaximos(){
    this.diasMaximos = Fecha.cantidadDias(this.Mes?.value);
 
  }
  ngOnInit(): void {
    
    this.manejarTareas = this.formBuilder.group({
      titulo:[this.editar?this.unaTarea.titulo:'',[Validators.required]],
      diaLimite:[this.editar?this.unaTarea.fechaLimite.dia:null,[Validators.required,Validators.min(1)]],
      mesLimite:[this.editar?this.unaTarea.fechaLimite.mes:null,[Validators.required,Validators.min(1),Validators.max(12)]],
      anioLimite:[this.editar?this.unaTarea.fechaLimite.anio:null,[Validators.required,Validators.min(this.fechaActual.getAnio())]],
      recordatorio:[this.editar?this.unaTarea.reminder:false]
    })
  }
 

  constructor(private formBuilder:FormBuilder,private misTareas:TareasService) { 
    this.fechaActual = Fecha.FechaActual;   
  }
 
  actualizaReminder(){
    this.reminder = !this.reminder;
  }
  get Titulo(){
    return this.manejarTareas.get("titulo")
  }
  get Dia(){
    return this.manejarTareas.get("diaLimite")
  }
  get Mes(){
    return this.manejarTareas.get("mesLimite");
  }
  get Anio(){
    return this.manejarTareas.get("anioLimite")
  }
 
  mesValido(mes:number,anio:number):boolean{
    //Retorna booleano diciendo si el mes ingresado es valido
    if (anio>this.fechaActual.getAnio()){
        return true;
    }
    else if(anio<this.fechaActual.getAnio()){
        return false;
    }
    else{
        return mes>= this.fechaActual.getMes()
    }
  }
  diaValido(dia:number,mes:number,anio:number):boolean{
    let resultado: boolean
    if (anio<Fecha.FechaActual.getAnio()){
       resultado = false;
        
    }
    else if(anio>Fecha.FechaActual.getAnio()){
        resultado=true;
        
    }
    else{
        if(mes < Fecha.FechaActual.getMes()){
          resultado= false;
          
        }
        else if(mes > Fecha.FechaActual.getMes()){
          resultado= true
          
        }
        else{
            resultado = (dia >= Fecha.FechaActual.getDia())        
           
        }
    }
    return resultado;
        
}

  
  agregar(evento:Event){
    evento.preventDefault;
    const anio:number = this.Anio?.value;
    const mes:number = this.Mes?.value;
    const dia:number = this.Dia?.value;
    
    
    if(this.manejarTareas.valid &&this.mesValido(mes,anio) &&  (this.diaValido(dia,mes,anio)) )  {
      const titulo:string = this.Titulo?.value;
      const fechaIngresada = new Fecha(dia,mes,anio);     
      const tarea:Tarea = {
        "id":this.lastId,
        "titulo":titulo,
        fechaLimite:{
          "dia":dia,
          "mes":mes,
          "anio":anio
        },
        "reminder":this.reminder
    }
    this.cierraForm.emit(tarea);
    }
    else{
      this.manejarTareas.markAllAsTouched
    }
  }

  modificar(evento:Event){
    evento.preventDefault;
    const anio:number = this.Anio?.value;
    const mes:number = this.Mes?.value;
    const dia:number = this.Dia?.value;
    
    
    if(this.manejarTareas.valid &&this.mesValido(mes,anio) &&  (this.diaValido(dia,mes,anio)) )  {
      const titulo:string = this.Titulo?.value;
      const tarea:Tarea = {
          "id":this.unaTarea.id,
          "titulo":titulo,
          fechaLimite:{
            "dia":dia,
            "mes":mes,
            "anio":anio
          },
          "reminder":this.reminder
      }
      this.cierraForm.emit(tarea);
    }
    else{
      this.manejarTareas.markAllAsTouched
    }
  }

}
