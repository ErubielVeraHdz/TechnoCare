import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { ServiciosAdminComponent } from "../../servicios-admin/servicios-admin.component";
import { EquiposComponent } from '../equipos/equipos.component';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ServiciosAdminComponent,EquiposComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {

}
