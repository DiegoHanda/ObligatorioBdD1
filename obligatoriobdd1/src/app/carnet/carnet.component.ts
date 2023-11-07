import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent {
  showInputs: boolean = false;

  constructor() {}

  ngOnInit(){
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  toggleInputs(value: boolean): void {
    this.showInputs = value;
  }
}
