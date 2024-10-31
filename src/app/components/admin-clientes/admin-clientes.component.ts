import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';



import { ServiciosAdminComponent } from "../../servicios-admin/servicios-admin.component";

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ServiciosAdminComponent],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent {

}
