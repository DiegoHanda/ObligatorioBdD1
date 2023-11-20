import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';

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


  //TERMINAR 
  //HAY QUE VERIFICAR SI EL LOGID YA ESTÁ EN USO, LUEGO LA CI, Y LUEGO HACER LOS POSTS
  //EN CASO DE TENER CARNET HACER SU POST SINO AGENDARSE
  onSubmit() {
    console.log(this.funcionario);
    this.saveFuncionario();
    alert('Registro Completado');
  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }

  goHome() {
    this.router.navigate(['']);
  }
}
