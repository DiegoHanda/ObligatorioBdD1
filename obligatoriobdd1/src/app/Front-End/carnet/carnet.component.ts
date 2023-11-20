import { Component } from '@angular/core';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from '../Services/carnet.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private carnetService: CarnetService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
  onSubmit() {
    //Verificar si ya tiene carnet en la bd, si tiene modificarlo(PUT), sino crearlo(POST)
    //En caso de no tener carnet para ingresar, agendar(PUT de agenda)
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
