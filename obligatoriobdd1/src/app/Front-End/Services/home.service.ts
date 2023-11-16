import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';
import { Observable, catchError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInServices {
  private apiUrl = 'http://localhost:3036/api/v1/login';

  constructor(private http: HttpClient) {}

  sumitLogin(Login: Login): Observable<object> {
    
/*     
    console.log("dawdawdadawdw")
    console.log("aaa",this.http.post<Login>(this.apiUrl, Login))
    alert(this.http.post<Login>(this.apiUrl, Login)); */
   /*  this.http.post(this.apiUrl,Login)
    .subscribe(response => console.log(response)) */
    //console.log(Login.LogId);
    /* return this.http.post(this.apiUrl,Login).p
    .subscribe(response => console.log(response)); */
      console.log(Login)
     return this.http.post<Login>(this.apiUrl, Login)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          throw error;
        })
      ); 
    
      
      
      
  }

  
}
