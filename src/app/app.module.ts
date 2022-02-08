import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TareasService } from './servicios/tareas/tareas.service';

import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';






@NgModule({
  declarations: [
    AppComponent,    
    AgregarTareaComponent,    
    EditarTareaComponent, 
    TareaComponent,
    HeaderComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
