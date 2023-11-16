import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoActualizacion } from '../Models/periodoActualizacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodoActualizacionService {
  private apiUrl = "http://localhost:3036/api/v1/periodos_actualizacion";

  constructor(private http: HttpClient) { }

  modificarPeriodo(pA: PeriodoActualizacion): Observable<Object> {
    return this.http.put('${this.apiUrl}/${id}', pA);
  }
}
