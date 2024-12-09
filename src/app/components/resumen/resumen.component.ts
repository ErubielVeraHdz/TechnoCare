import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, RouterModule } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
;
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [RouterLink,  CommonModule, RouterModule],
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
