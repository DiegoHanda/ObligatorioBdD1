import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Carnet } from '../Models/carnet';

@Injectable({
  providedIn: 'root',
})
export class CarnetService {
  private apiUrl = 'http://localhost:3036/api/v1/carnet_salud';

  constructor(private http: HttpClient) {}

  crearCarnet(carnet: Carnet, logId: number): Observable<Object> {
    return this.http.post<Carnet>(`${this.apiUrl}/${logId}`, carnet).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
}
