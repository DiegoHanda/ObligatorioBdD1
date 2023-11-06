import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gameUrl?: string;
  overlayRight:boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  loginAsAdmin(): void {
    this.router.navigate(['/login']);
  }
  
  toggleOverlay(): void {
    this.overlayRight = !this.overlayRight;
  }
}
