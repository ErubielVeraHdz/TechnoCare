import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { Routes } from '@angular/router';
import { ClientesComponent } from "../components/clientes/clientes.component";

@Component({
  selector: 'app-servicios-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ClientesComponent],
  templateUrl: './servicios-admin.component.html',
  styleUrl: './servicios-admin.component.css'
})
export class ServiciosAdminComponent {

}
