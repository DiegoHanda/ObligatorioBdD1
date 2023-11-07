import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  overlayRight:boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  } 

  toggleOverlay(): void {
    this.overlayRight = !this.overlayRight;
  }
}
