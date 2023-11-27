import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Login } from '../Models/Login';
import { LogInServices } from '../Services/home.service';
import { PeriodoActualizacionService } from '../Services/periodo-actualizacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Login: Login = new Login();
  overlayRight: boolean = false;


  constructor(private LoginService: LogInServices,
     private router: Router,
     private periodoActualizacionService:PeriodoActualizacionService) {}

  ngOnInit(): void {}

  async logIn() {
    if(await this.periodoActualizacionService.estamosEnPeriodo2()==false){
      alert("NO PUEDES INGRESAR PORQUE NO HAY PERIODO ACTIVO")
    }
    else{
      alert("PERIODO ACTIVO")
          let navigationExtras: NavigationExtras = {
            queryParams: { id: this.Login.logId },
          };
          this.LoginService.submitLoginFuncionario(this.Login).subscribe(
            (response) => {
              console.log('Response from server:', response);
              if (response) {
                this.router.navigate(['/actualizar-carnet/:id'], navigationExtras);
                
              } else {
                alert('LA CONTRASEÑA O USUARIO NO COINCIDEN');
              }
            },
            (error) => {
              console.error('Error:', error);
            }
          );

    }
    
  }
  async logInAdmin() {
   
          let navigationExtras: NavigationExtras = {
            queryParams: { id: this.Login.logId },
          };
          this.LoginService.submitLoginAdmin(this.Login).subscribe(
            (response) => {
              console.log('Response from server:', response);
              if (response) {
                //this.router.navigate(['/actualizar-carnet/:id'], navigationExtras);
                this.router.navigate(['admin/:id'], navigationExtras);
              } else {
                alert('LA CONTRASEÑA O USUARIO NO COINCIDEN');
              }
            },
            (error) => {
              console.error('Error:', error);
            }
          );

    
    
  }

  toggleOverlay(): void {
    this.overlayRight = !this.overlayRight;
  }

  async enPeriodo(){
    if(await this.periodoActualizacionService.estamosEnPeriodo2()==false){
      alert("NO PUEDES INGRESAR PORQUE NO HAY PERIODO ACTIVO")
    } else {
      this.router.navigate(['register']);
    }
  }
}
