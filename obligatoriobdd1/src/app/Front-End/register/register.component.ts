import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { CarnetService } from '../Services/carnet.service';


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


  //TERMINAR 
  //HAY QUE VERIFICAR SI EL LOGID YA ESTÁ EN USO, LUEGO LA CI, Y LUEGO HACER LOS POSTS
  //EN CASO DE TENER CARNET HACER SU POST SINO AGENDARSE
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
    if (this.isValidFile()) {
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

  private isValidFile(): boolean {
    if (!this.showInputs) {
      return true;
    }
    const fileExtension = this.getFileExtension(this.carnet.comprobante || '');
    return fileExtension === 'pdf' || this.isImageExtension(fileExtension);
  }

  private getFileExtension(filename: string): string {
    const parts = filename.split('.');
    return parts[parts.length - 1].toLowerCase();
  }

  private isImageExtension(extension: string): boolean {
    return ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
  }
}