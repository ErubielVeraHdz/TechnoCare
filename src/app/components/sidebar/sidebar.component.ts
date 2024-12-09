import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-sidebar',
  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarOpen = false; // Estado inicial: sidebar cerrado

  constructor(private router: Router, public authService: AuthserviceService) {}

  // Método para abrir o cerrar el sidebar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Método de logout (esto puede seguir igual)
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  // Método para evitar que el sidebar se cierre al hacer clic en un routerLink
  keepSidebarOpen(event: MouseEvent) {
    event.stopPropagation(); // Detenemos la propagación del evento
  }
}

