import { Component } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-servicios-admin',
  standalone: true,
  imports: [],
  templateUrl: './servicios-admin.component.html',
  styleUrl: './servicios-admin.component.css'
})
export class ServiciosAdminComponent {
  
  constructor( public authService: AuthserviceService,  private router: Router){}
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
