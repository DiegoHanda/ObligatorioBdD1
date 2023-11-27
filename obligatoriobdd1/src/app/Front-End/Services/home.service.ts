import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';
import { Observable, catchError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInServices {
  private loginUrlLoginAdmin='http://localhost:3036/api/v1/loggear/Admin'
  private loginUrlCREARlogin = 'http://localhost:3036/api/v1/login';
  private loginUrlFuncionario = 'http://localhost:3036/api/v1/loggear';
  private loginUrlAdmin = 'http://localhost:3036/api/v1/adminlog';

  constructor(private http: HttpClient) {}

   crearLogin(login:Login){
    
    return this.http.post<Login>(this.loginUrlCREARlogin, login)
    .pipe(
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );


  }
   deleteLogin(login:Login){
   // alert(this.loginUrlCREARlogin+"/"+login.logId);
    return this.http.delete(this.loginUrlCREARlogin+"/"+login.logId).pipe(
      catchError((error) => {
        alert("ERORR ELIMINAndo login");
        console.error('Error:', error);
        throw error;
      })
    );

  }
  submitLoginAdmin(Login: Login): Observable<object> {
    return this.http.post<Login>(this.loginUrlLoginAdmin, Login).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
  

  submitLoginFuncionario(Login: Login): Observable<object> {
    return this.http.post<Login>(this.loginUrlFuncionario, Login).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
}
