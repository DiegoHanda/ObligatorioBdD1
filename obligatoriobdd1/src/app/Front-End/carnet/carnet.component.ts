import { Component } from '@angular/core';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from '../Services/Carnet.service';
import { FileValidationService } from '../Services/filevalidation.service';
@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent {
  showInputs: boolean = false;
  funcionario: Funcionario = new Funcionario();
  carnet: Carnet = new Carnet();
  id!:number;

  constructor(private router: Router,
     private route: ActivatedRoute,
      private funcionarioService: FuncionarioService,
      private carnetService: CarnetService,
      private fileValidationService: FileValidationService
      ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
  onSubmit() {
    if (this.fileValidationService.isValidFile(this.showInputs, this.carnet.comprobante)){
    this.funcionarioService.actualizarFuncionario(this.id, this.funcionario)
    alert('Actualización Completada');
  } else {
    alert('Por favor, selecciona un archivo PDF o una imagen.');
  }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const fileType = file.type;
  
    if (fileType !== 'application/pdf' && !fileType.startsWith('image/')) {
      
      alert('Por favor, selecciona un archivo PDF o una imagen.');
      
      this.carnet.comprobante = null;
    } else {
      
      this.carnet.comprobante = file.name;
    }
  }

  toggleInputs(value: boolean): void {
    console.log(this.showInputs);
    this.showInputs = value;
    console.log(this.showInputs);
  }

  goHome() {
    this.router.navigate(['']);
  }
}
