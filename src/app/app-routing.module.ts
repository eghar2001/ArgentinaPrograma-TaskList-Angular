import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
const routes: Routes = [
  {path:'addTask',component:AgregarTareaComponent},
  {path:'edit/:id',component:EditarTareaComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
