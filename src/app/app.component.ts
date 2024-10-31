import { Component } from '@angular/core';
import { RouterOutlet,Routes,RouterLink,RouterLinkActive } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HomeComponent } from "./components/home/home.component";
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderMenuComponent, HomeComponent, NosotrosComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppTecnoCare';
}
export const routes: Routes = [
  {path: "registrarse",component:RegistrarseComponent}
]

