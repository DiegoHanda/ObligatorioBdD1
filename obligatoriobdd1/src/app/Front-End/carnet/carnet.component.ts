import { Component } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent {
  showInputs: boolean = false;

  constructor() {
    
  }

  ngOnInit() {}
  submitted = false;
  onSubmit() {
    this.submitted = true;
    alert('Actualización Completada');
  }

  toggleInputs(value: boolean): void {
    console.log(this.showInputs);
    this.showInputs = value;
    console.log(this.showInputs);

  }
}
