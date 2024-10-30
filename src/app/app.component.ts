import { Component } from '@angular/core';
import { RouterOutlet,Routes,RouterLink,RouterLinkActive } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppTecnoCare';
}
export const routes: Routes = [
  {path: "registrarse",component:RegistrarseComponent}
]
