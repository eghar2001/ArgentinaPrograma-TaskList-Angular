import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';
const routes: Routes = [
  {path:'addTask',component:AgregarTareaComponent},
  {path:'edit/:id',component:EditarTareaComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
