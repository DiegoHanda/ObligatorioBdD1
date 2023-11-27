import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { CarnetService } from '../Services/carnet.service';
import { AgendaService } from '../Services/agenda.service';
import { FileValidationService } from '../Services/filevalidation.service';
import { Agenda } from '../Models/agenda';
import { Login } from '../Models/Login';
import { LogInServices } from '../Services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  login: Login = new Login();
  funcionario: Funcionario = new Funcionario();
  carnet: Carnet = new Carnet();
  showInputs: boolean = false;
  fechasDisponibles: Agenda[] = [];

  constructor(
    private loginService: LogInServices,
    private agendaService:AgendaService,
    private funcionarioService: FuncionarioService,
    private carnetService: CarnetService,
    private location: Location,
    //private agendaService: AgendaService,
    private router: Router,
    private fileValidationService: FileValidationService
  ) {}

   ngOnInit() {
    this.getDisponibles();
  }
 
  getDisponibles() {
    this.agendaService.getFechasDisponibles().subscribe(
      (fechas: Agenda[]) => {
        this.fechasDisponibles = fechas;
      },
      (error) => console.log(error)
    );
  }


  saveCarnet() {
    this.carnetService.crearCarnet(this.carnet).subscribe(
      (data: any) => {
        console.log(data), this.goHome();
      },
      (error: any) => console.log(error)
    );
    this.carnet = new Carnet();
  }
  async saveLogin():Promise<boolean> {
    try {
      const response = await this.loginService.crearLogin(this.login).toPromise();
      console.log('Response from server:', response);
      if (response) {
        //alert('(buen Login)');
        this.funcionario.logId=this.login.logId;
        return true;
      } else {
       // alert('Login MAl');
        return false;
      }
    } catch (error) {
      //alert('LOGINMALOOO');
      console.error('Error:', error);
      return false;
    }
  }
  async saveFuncionario():Promise<boolean> {
    try {
      const response = await this.funcionarioService.crearFuncionario(this.funcionario).toPromise();
      console.log('Response from server:', response);
      if (response) {
        //alert('(buen Login)');
        return true;
      } else {
       // alert('Login MAl');
        return false;
      }
    } catch (error) {
      //alert('LOGINMALOOO');
      console.error('Error:', error);
      return false;
    }
  }
  

  async onSubmit() {
    this.loginService.deleteLogin(this.login);
    let vLogin:boolean=false;
    let vFuncionario:boolean=false;
    let vCarnet:boolean=false;
    if(await this.saveLogin()){
      vLogin=true;
      alert("registro login  Correcto")
      if(await this.saveFuncionario()){
        vFuncionario=true;
        alert("registro funcionarioo correcto")
      }
      else{
        //this.loginService.deleteLogin(this.login);
        alert("fallofuncionario")
      }
    }
    else{
      vLogin=false;
      alert("FALLO LOGIN register")
    }
   /*  vFuncionario=await this.saveFuncionario();
     try {
      const resultado = await this.saveLogin();
      if (resultado) {
        vLogin=true
        //alert("TODOOK")
        // Hacer algo si el login es exitoso
      } else {
        vLogin=false
        //alert("NADA OK")
        // Hacer algo si el login falla
      }
    } catch (error) {
      alert("BUUU")
      // Manejar errores si ocurren durante el login
    } */
    //alert("func::: "+vFuncionario);
    /* if (this.fileValidationService.isValidFile(this.showInputs, this.carnet.comprobante)) {
      console.log(this.funcionario);
      this.saveFuncionario();
      this.saveCarnet();
      this.funcionarioService.crearFuncionario(this.funcionario).subscribe();
      alert('Registro Completado');
    } else {
      alert('Por favor, selecciona un archivo PDF o una imagen.');
    } */
  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }

  goHome() {
    this.router.navigate(['']);
  }
}
