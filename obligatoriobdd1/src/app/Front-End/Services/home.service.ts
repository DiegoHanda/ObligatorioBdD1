import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';
import { Observable, catchError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInServices {
  private loginUrlFuncionario = 'http://localhost:3036/api/v1/loggear';
  private loginUrlAdmin = 'http://localhost:3036/api/v1/adminlog';

  constructor(private http: HttpClient) {}

  submitLoginFuncionario(Login: Login): Observable<object> {
    return this.http.post<Login>(this.loginUrlFuncionario, Login).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
}
