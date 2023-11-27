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

  constructor(
    private LoginService: LogInServices,
    private router: Router,
    private periodoActualizacionService: PeriodoActualizacionService
  ) {}

  ngOnInit(): void {}

  async logIn() {
    if ((await this.periodoActualizacionService.estamosEnPeriodo()) == false) {
      alert('El Período ha Finalizado');
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: { id: this.Login.logId },
      };
      this.LoginService.submitLoginFuncionario(this.Login).subscribe(
        (response) => {
          console.log('Response from server:', response);
          if (response) {
            this.router.navigate(['/actualizar-carnet/:id'], navigationExtras);
          } else {
            alert('Usuario o Contraseña Incorrectos');
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
          this.router.navigate(['admin/:id'], navigationExtras);
        } else {
          alert('Usuario o Contraseña Incorrectos');
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

  async enPeriodo() {
    if ((await this.periodoActualizacionService.estamosEnPeriodo()) == false) {
      alert('El Período ha Finalizado');
    } else {
      this.router.navigate(['register']);
    }
  }
}
