import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private rutas:Router) { }
  irTask(){
    this.rutas.navigate(['/tasks'])
  }
  ngOnInit(): void {
  }

}
