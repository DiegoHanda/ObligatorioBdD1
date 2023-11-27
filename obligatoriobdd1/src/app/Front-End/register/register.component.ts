import { Component } from '@angular/core';
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
  selectedAgenda: Agenda = new Agenda();

  constructor(
    private loginService: LogInServices,
    private funcionarioService: FuncionarioService,
    private carnetService: CarnetService,
    private location: Location,
    private agendaService: AgendaService,
    private router: Router,
    private fileValidationService: FileValidationService
  ) {}

  ngOnInit() {
    this.getDisponibles();
  }

  onSelectChange(deviceValue: any) {
    console.log(deviceValue.value);
  }

  getDisponibles() {
    this.agendaService.getFechasDisponibles().subscribe(
      (fechas: Agenda[]) => {
        this.fechasDisponibles = fechas;
      },
      (error) => console.log(error)
    );
  }

  saveFuncionario() {
    this.funcionarioService.crearFuncionario(this.funcionario).subscribe(
      (data) => {
        if (this.showInputs) {
          this.saveCarnet();
        } else {
          console.log(this.login.logId);
          console.log(this.selectedAgenda);
          console.log(this.selectedAgenda.fchAgenda);
          console.log(this.selectedAgenda.nro);
          console.log(this.selectedAgenda.ci);
          this.agendaService
            .actualizarAgenda(this.login.logId, this.selectedAgenda)
            .subscribe(
              (data) => {
                alert('Agendado');
                this.goHome();
              },
              (error) => alert('Hubo un error al agendarse')
            );
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.funcionario = new Funcionario();
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
  saveLogin() {
    this.login.logId = this.funcionario.logId;
    this.loginService.crearLogin(this.login).subscribe(
      (data: any) => {
        this.saveFuncionario();
      },
      (error: any) => alert('Hubo un error en saveLogin')
    );
  }

  onSubmit() {
    this.checkLogID();    
  }

  checkLogID() {
    this.loginService
      .checkLogID(this.funcionario.logId)
      .subscribe((checkLogId: any) => {
        if (checkLogId) {
          alert('Ya existe un funcionario con ese logID');
        } else {
          this.checkCIFuncionario();
        }
      });
  }

  checkCIFuncionario() {
    this.funcionarioService
      .checkCIFuncionario(this.funcionario.ci)
      .subscribe((checkCI: any) => {
        if (checkCI) {
          alert('Ya existe un funcionario con ese CI');
        } else {
          //Llamar crear Login
          //Llamar crear Funcionario
          this.saveLogin();
          /**/
        }
      });
  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }

  goHome() {
    this.router.navigate(['']);
  }
}
