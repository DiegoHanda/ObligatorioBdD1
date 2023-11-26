import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private apiUrl = "http://localhost:3036/api/v1/carnet_salud"; 

  constructor(private http: HttpClient) {}

  getFechasDisponibles(): Observable<Date[]> {
    const url = `${this.apiUrl}/agenda`;
    return this.http.get<Date[]>(url);
  }
}
