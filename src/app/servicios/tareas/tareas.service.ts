import { Injectable } from '@angular/core';
import { Fecha } from 'src/app/modelos/app.fecha.model';
import { HttpClient,HttpHandler, HttpHeaders } from '@angular/common/http';
import { Tarea } from 'src/app/modelos/app.tarea.model';
import { Observable,of } from 'rxjs';

const httpOptions={headers: new HttpHeaders({
  'Content-Type':'application/json'
})}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl:string = 'http://localhost:3000/tareas'

  constructor(private http:HttpClient){

  }    
    
   public buscarTarea(ind:number){
     
    }
    public agregarTarea(tarea:Tarea):Observable<Tarea>{
      return this.http.post<Tarea>(this.apiUrl,tarea,httpOptions)
    }
    public getTareas():Observable<Tarea[]>{
      return this.http.get<Tarea[]>(this.apiUrl);
    
    }
    public eliminaTarea(tarea:Tarea):Observable<Task>{
      const url =`${this.apiUrl}/${tarea.id}`;
       return  this.http.delete<Task>(url);
    }
    public editarTarea(tarea:Tarea):Observable<Tarea>{
      const url = `${this.apiUrl}/${tarea.id}`;
      return this.http.put<Tarea>(url,tarea,httpOptions);
    }

}
