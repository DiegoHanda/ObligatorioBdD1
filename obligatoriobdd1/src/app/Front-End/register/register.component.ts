import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { CarnetService } from '../Services/carnet.service';
import { AgendaService } from '../Services/agenda.service';
import { Agenda } from '../Models/agenda';
import { Login } from '../Models/Login';
import { LogInServices } from '../Services/home.service';

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
    private agendaService: AgendaService,
    private router: Router
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

  saveFuncionario() {
    this.funcionarioService.crearFuncionario(this.funcionario).subscribe(
      (data) => {
        if (this.showInputs) {
          this.saveCarnet();
        } else {
          this.saveAgenda();
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.funcionario = new Funcionario();
  }

  saveAgenda() {
    this.selectedAgenda.ci = 0;
    this.agendaService
      .actualizarAgenda(
        this.login.logId,
        new Agenda(
          this.selectedAgenda.nro,
          this.selectedAgenda.ci,
          this.selectedAgenda.fchAgenda
        )
      )
      .subscribe(
        (data) => {
          alert('Agendado');
          this.goHome();
        },
        (error) => alert('Hubo un error al agendarse')
      );
  }
  saveCarnet() {
    console.log(this.carnet.comprobante);
    this.carnetService
      .crearCarnet(
        new Carnet(this.carnet.fchVencimiento, this.carnet.comprobante),
        this.login.logId
      )
      .subscribe(
        (data: any) => {
          console.log(data), this.goHome();
          this.carnet = new Carnet();
        },
        (error: any) => {
          console.log(error);
          this.carnet = new Carnet();
        }
      );
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
