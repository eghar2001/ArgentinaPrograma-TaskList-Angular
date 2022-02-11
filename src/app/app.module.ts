import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/lista-tareas/header/header.component';
import { ManejoTareasComponent } from './components/lista-tareas/manejo-tareas/manejo-tareas.component';
import { TareaComponent } from './components/lista-tareas/tarea/tarea.component';
import { TareasService } from './servicios/tareas/tareas.service';
import { FooterComponent } from './components/footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,   
    TareaComponent,  
    HeaderComponent,
    ManejoTareasComponent,
   
    ListaTareasComponent,
    AboutComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
