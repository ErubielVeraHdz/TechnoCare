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
  totalEquipos: number = 0;
  totalUsuarios: number = 0;
  totalReportes: number = 0;

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
    this.authService.getEquipos().subscribe({
      next: (response) => {
        this.totalEquipos = response.total; // Total de registros
        console.log('Total de registros:', this.totalEquipos);
      },
      error: (error) => {
        console.error('Error al obtener equipos:', error);
      }
    });

    this.authService.getUsuarios().subscribe({
      next: (response) => {
        this.totalUsuarios = response.total; // Total de registros
        console.log('Total de registros:', this.totalUsuarios);
      },
      error: (error) => {
        console.error('Error al obtener equipos:', error);
      }
    });

    this.authService.getReportes().subscribe({
      next: (response) => {
        this.totalReportes = response.total; // Total de registros
        console.log('Total de registros:', this.totalReportes);
      },
      error: (error) => {
        console.error('Error al obtener equipos:', error);
      }
    });
  }
  }


