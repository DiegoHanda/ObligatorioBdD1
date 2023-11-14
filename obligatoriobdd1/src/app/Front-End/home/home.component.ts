import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodoActualizacion } from '../Models/periodoActualizacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  overlayRight:boolean = false;
  periodoActualizacion: PeriodoActualizacion = new PeriodoActualizacion();

  constructor(private router: Router) {}

  ngOnInit(): void {
  } 

  logIn() {
    this.actualizarFuncionario(1);
  }
  toggleOverlay(): void {
    this.overlayRight = !this.overlayRight;
  }

  actualizarFuncionario(id: number){
    this.router.navigate(['/actualizar-carnet', id]);
  }

  modificarPeriodo() {

  }
}
