import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
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
    this.authService.logout();
    this.router.navigate(['/iniciar sesion']);
  }
  
}
