import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthserviceService) {}

  ngOnInit(): void {
    // Intenta cargar los datos del usuario desde el servicio
    this.user = this.authService.getLoggedInUser();

    // Si no está disponible en el servicio, cargar desde localStorage
    if (!this.user) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
  }
}

