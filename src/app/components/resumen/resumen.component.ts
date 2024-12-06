import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  user: any;
  constructor(public authService: AuthserviceService, private router: Router) {}

  ngOnInit():void{
    this.user = this.authService.getLoggedInUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
