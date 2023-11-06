import { Component} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private location: Location) { }

  index = 100;

  model = { fullName: 'Tu Nombre', username: 'nombre_usuario', password: 'qhiud2xka526ubcds8', email: 'usuario@gmail.com' };

  submitted = false;
  onSubmit() { this.submitted = true; }


  goBack(): void {
    this.location.back();
  }
}
