import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';



import { ServiciosAdminComponent } from "../../servicios-admin/servicios-admin.component";

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ServiciosAdminComponent],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent {

}
