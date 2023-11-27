import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoActualizacion } from '../Models/periodoActualizacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeriodoActualizacionService {
  private apiUrl = 'http://localhost:3036/api/v1/periodos_actualizacion';

  constructor(private http: HttpClient) {}

  modificarPeriodo(pA: PeriodoActualizacion): Observable<Object> {
    console.log(pA);
    console.log(pA.fchFin);
    return this.http.put(this.apiUrl, pA);
  }

  async estamosEnPeriodo2(): Promise<boolean> {
    try {
      const response: PeriodoActualizacion[] | undefined = await this.http
        .get<PeriodoActualizacion[]>(this.apiUrl)
        .toPromise();
      //console.log('Response from server:', response);
      if (response) {
        let fechAct = this.convertirFecha(new Date().toDateString());
        let fechFin: Date = response[0].fchFin;
        let fechInicio: Date = response[0].fchInicio;
        let fechInicioSTR: string = fechInicio.toString();
        let fechActSTR: string = fechAct.toString();
        let fechFinSTR: string = fechFin.toString();

        console.log('ACTUAl:', fechAct);
        console.log('INICIO:', fechInicio);
        console.log('FIN:', fechFin);

        let esMayorqueFINICIO: boolean = this.compararFechas(
          fechActSTR,
          fechInicioSTR
        );
        let esMenorqueFINICIO: boolean = this.compararFechas(
          fechFinSTR,
          fechActSTR
        );
        console.log(esMayorqueFINICIO, esMenorqueFINICIO);
        return (esMayorqueFINICIO && esMenorqueFINICIO);
      }
    } catch (error) {}

    return false;
  }

  convertirFecha(fecha: string): string {
    const fechaObjeto = new Date(fecha);

    const year = fechaObjeto.getFullYear();
    const month = ('0' + (fechaObjeto.getMonth() + 1)).slice(-2); // Agrega un 0 al mes si es necesario
    const day = ('0' + fechaObjeto.getDate()).slice(-2); // Agrega un 0 al día si es necesario

    return `${year}-${month}-${day}`;
  }

  compararFechas(fechaStr1: string, fechaStr2: string): boolean {
    const fecha1 = new Date(fechaStr1);
    const fecha2 = new Date(fechaStr2);

   

    if (fecha1 > fecha2) {
      return true;
    } else if (fecha1 < fecha2) {
      return false;
    } else {
      return false;
    }
  }


}
