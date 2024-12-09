import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive, Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {
  user: any;
  constructor(public authService: AuthserviceService, private router: Router) {}

  ngOnInit():void{
    this.user = this.authService.getLoggedInUser();
  }

  logout() {
    // Limpia datos del usuario
    this.authService.logout(); // Aquí asegúrate de limpiar la sesión correctamente
  
    // Redirige a login o home
    this.router.navigate(['/home']);
  }
}
