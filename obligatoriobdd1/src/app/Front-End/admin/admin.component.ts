import { Component } from '@angular/core';
import { PeriodoActualizacion } from '../Models/periodoActualizacion';
import { PeriodoActualizacionService } from '../Services/periodo-actualizacion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  periodoActualizacion: PeriodoActualizacion = new PeriodoActualizacion();

  constructor(private periodoActualizacionService: PeriodoActualizacionService){}

  ngOnInit(): void {
    
  }


  modificarPeriodo() {
    console.log(this.periodoActualizacion);
    console.log(this.periodoActualizacion.fchFin);
    this.periodoActualizacionService.modificarPeriodo(this.periodoActualizacion).subscribe(
      (response) => {
        console.log('Response from server:', response);
        if (response) {
          alert('PERIODO ACTUALIZADO');
        } else {
          alert('PERIODO NO ACTUALIZADO');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }
}
