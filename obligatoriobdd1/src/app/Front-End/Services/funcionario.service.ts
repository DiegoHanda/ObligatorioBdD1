import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../Models/funcionario';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:3036/api/v1/funcionarios';

  constructor(private http: HttpClient) {}

  crearFuncionario(funcionario: Funcionario): Observable<Object> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  actualizarFuncionario(
    id: number,
    funcionario: Funcionario
  ): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, funcionario);
  }

  checkCIFuncionario(ci: number): Observable<Object> {
    return this.http.get(`${this.apiUrl}/exists/${ci}`);
  }
}
