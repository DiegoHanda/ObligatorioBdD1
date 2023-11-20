import { Component } from '@angular/core';
import { FuncionarioService } from '../Services/funcionario.service';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute, private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
  onSubmit() {
    this.funcionarioService.actualizarFuncionario(this.id, this.funcionario).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    )
    alert('Actualización Completada');
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
