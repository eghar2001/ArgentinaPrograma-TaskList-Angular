import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { TareasService } from './servicios/tareas/tareas.service';

import { ManejoTareasComponent } from './components/manejo-tareas/manejo-tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TareaComponent } from './components/tarea/tarea.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';






@NgModule({
  declarations: [
    AppComponent,    
    ManejoTareasComponent,    
    TareaComponent,
    HeaderComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
