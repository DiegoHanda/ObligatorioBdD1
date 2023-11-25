import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { CarnetService } from '../Services/Carnet.service';
import { AgendaService } from '../Services/Agenda.service';
import { FileValidationService } from '../Services/filevalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  funcionario: Funcionario = new Funcionario();
  carnet: Carnet = new Carnet();
  showInputs: boolean = false;
  fechasDisponibles: Date[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private carnetService: CarnetService,
    private location: Location,
    private agendaService: AgendaService,
    private router: Router
    private fileValidationService: FileValidationService

  ) {}

  ngOnInit() {
    this.agendaService.getFechasDisponibles().subscribe(
      (fechas: Date[]) => {
        this.fechasDisponibles = fechas;
      },
      (error) => console.log(error)
    );
  }

  

  saveFuncionario() {
    this.funcionarioService.crearFuncionario(this.funcionario).subscribe(
      (data) => {
        console.log(data), this.goHome();
      },
      (error) => console.log(error)
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

  onSubmit() {
    if (this.fileValidationService.isValidFile(this.showInputs, this.carnet.comprobante)) {
      console.log(this.funcionario);
      this.saveFuncionario();
      this.saveCarnet();
      this.funcionarioService.crearFuncionario(this.funcionario).subscribe();
      alert('Registro Completado');
    } else {
      alert('Por favor, selecciona un archivo PDF o una imagen.');
    }
  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }

  goHome() {
    this.router.navigate(['']);
  }

}