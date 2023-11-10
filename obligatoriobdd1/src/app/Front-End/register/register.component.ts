import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showInputs: boolean = false;
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    alert('Registro Completado');

  }
  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }
}
