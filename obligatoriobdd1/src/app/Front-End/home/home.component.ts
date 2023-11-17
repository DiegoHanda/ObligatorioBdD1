import { Component } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import { PeriodoActualizacion } from '../Models/periodoActualizacion';
import {Login} from "../Models/Login";
import { LogInServices } from '../Services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Login:Login=new Login();
  
  
  
  overlayRight:boolean = false;
  periodoActualizacion: PeriodoActualizacion = new PeriodoActualizacion();

  constructor(private LoginService:LogInServices,
    private router: Router) {}
    

  ngOnInit(): void {
  }
 
  logIn2(){
    
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.Login.logId }}
    this.LoginService.sumitLogin(this.Login).subscribe(
      (response) => {
        // Handle the response here
        
        console.log('Response from server:', response);
        if (response){
          this.router.navigate(['/actualizar-carnet/:id'],navigationExtras);
        }
        else{
          alert("LA CONTRASEÑA O USUARIO NO COINCIDEN")
        }
        // Perform operations with the response data
        // For example, assign it to a variable
        // this.myResponseData = response;
      },
      (error) => {
        // Handle error responses
        console.error('Error:', error);
      }
    );
    

  }
  


  toggleOverlay(): void {
    this.overlayRight = !this.overlayRight;
  }

  actualizarFuncionario(id: number){
    this.router.navigate(['/actualizar-carnet', id]);
  }

  modificarPeriodo() {

  }
}
