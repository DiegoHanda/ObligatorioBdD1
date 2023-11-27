import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from '../Models/agenda';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private apiUrl = 'http://localhost:3036/api/v1/agenda';

  constructor(private http: HttpClient) {}

  getFechasDisponibles(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiUrl);
  }

  actualizarAgenda(logId: number, agenda: Agenda): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${logId}`, agenda);
  }
}
