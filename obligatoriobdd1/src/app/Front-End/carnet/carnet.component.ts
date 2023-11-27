import { Component } from '@angular/core';
import { Funcionario } from '../Models/funcionario';
import { Carnet } from '../Models/carnet';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from '../Services/carnet.service';
import { FileValidationService } from '../Services/filevalidation.service';
import { FuncionarioService } from '../Services/funcionario.service';
import { Agenda } from '../Models/agenda';
import { AgendaService } from '../Services/agenda.service';
@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent {
  showInputs: boolean = false;
  funcionario: Funcionario = new Funcionario();
  carnet: Carnet = new Carnet();
  id!: number;
  fechasDisponibles: Agenda[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private carnetService: CarnetService,
    private fileValidationService: FileValidationService,
    private agendaService: AgendaService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDisponibles();
  }
  onSubmit() {
    //Verificar si ya tiene carnet en la bd, si tiene modificarlo(PUT), sino crearlo(POST)
    //En caso de no tener carnet para ingresar, agendar(PUT de agenda)
    if (
      this.fileValidationService.isValidFile(
        this.showInputs,
        this.carnet.comprobante
      )
    ) {
      this.funcionarioService.actualizarFuncionario(this.id, this.funcionario);
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

  getDisponibles() {
    this.agendaService.getFechasDisponibles().subscribe(
      (fechas: Agenda[]) => {
        this.fechasDisponibles = fechas;
      },
      (error) => console.log(error)
    );
  }
}
