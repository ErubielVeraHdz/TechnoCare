import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  constructor(public authService: AuthserviceService, private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  
  getUserRole(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.type || null;
  }
  
  logout() {
    // Limpia datos del usuario
    this.authService.logout(); // Aquí asegúrate de limpiar la sesión correctamente
  
    // Redirige a login o home
    this.router.navigate(['/login']);
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
