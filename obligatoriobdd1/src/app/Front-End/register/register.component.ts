import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';
import { CarnetService } from '../carnet.service';
import { Carnet } from '../carnet';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  funcionario: Funcionario = new Funcionario();
  carnet: Carnet = new Carnet();
  showInputs: boolean = false;

  constructor(
    private funcionarioService: FuncionarioService,
    private carnetService: CarnetService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}

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
      (data) => {
        console.log(data), this.goHome();
      },
      (error) => console.log(error)
    );
    this.carnet = new Carnet();
  }

  onSubmit() {
    console.log(this.funcionario);
    this.saveFuncionario();
    this.saveCarnet();
    alert('Registro Completado');
  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }

  goHome() {
    this.router.navigate(['']);
  }
}