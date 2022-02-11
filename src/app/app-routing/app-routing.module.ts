import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { AboutComponent } from '../components/about/about.component';
import { ListaTareasComponent } from '../components/lista-tareas/lista-tareas.component';

const routes:Routes = [  
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'/tasks',pathMatch:'full'},
  {path:'tasks',component:ListaTareasComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
