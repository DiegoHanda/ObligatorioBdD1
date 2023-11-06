import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent {

  constructor(private router: Router, private location: Location) { }

  index = 100;

  model = { fullName: 'Tu Nombre', username: 'nombre_usuario', password: 'qhiud2xka526ubcds8', email: 'usuario@gmail.com' };

  submitted = false;
  onSubmit() { this.submitted = true; }


  goBack(): void {
    this.location.back();
  }

}
