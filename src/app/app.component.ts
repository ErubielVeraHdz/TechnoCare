import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { AuthserviceService } from './services/authservice.service';
import { HeaderAdminComponent } from "./components/header-admin/header-admin.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent, HeaderAdminComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppTecnoCare';

  constructor(private authService: AuthserviceService) {}

  getUserRole(): string | null {
    const user = this.authService.getLoggedInUser();
    return user ? user.type : null; // Asegúrate de que el rol se llama "type"
  }
}
