import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { HttpEquiposService } from '../../services/http-equipos.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent implements OnInit {
  private formbuilder = new FormBuilder();
  equiposForm = this.formbuilder.group({
    dispositivo: ['', Validators.required],
      marca: [''],
      numeroSerie: ['', Validators.required],
      modelo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoMantenimiento: ['']
  })

  equipos:any;
  mensaje: any;
  equipoEditar: any = null;

  constructor(private equipoService:HttpEquiposService, public authService: AuthserviceService,  private router: Router){}

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(data=>{
      this.equipos = data;      
    });      
  }

  cargarEquipos() {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

   guardar() {
    if (this.equipoEditar) {
      // Si estamos editando, actualizamos el empleado
      this.equipoService.updateEquipos(this.equipoEditar.id, this.equipoEditar.value).subscribe(data => {
        this.mensaje = 'Empleado actualizado con éxito';
        console.log(this.mensaje);
        this.cargarEquipos(); // Recargar la lista de empleados después de actualizar
        this.equipoEditar = null; // Limpiar la variable después de la actualización
      });
    } else {
      // Si no estamos editando, creamos un nuevo empleado
      this.equipoService.createEquipos(this.equipoEditar.value).subscribe(data => {
        this.mensaje = 'Empleado creado con éxito';
        console.log(this.mensaje);
        this.cargarEquipos(); // Recargar la lista de empleados después de crear
      });
    }
  }

  editar(equipo: any) {
    this.equipoEditar = equipo;
    this.equiposForm.setValue({
    dispositivo: equipo.dispositivo,
    marca: equipo.marca,
    numeroSerie: equipo.numeroSerie,
        modelo: equipo.modelo,
        descripcion: equipo.descripcion,
        tipoMantenimiento: equipo.tipoMantenimiento
    });
  }

  eliminar(id: number) {
    this.equipoService.deleteEquipos(id).subscribe(data => {
      this.mensaje = 'Empleado eliminado con éxito';
      console.log(this.mensaje);
      this.cargarEquipos(); // Recargar la lista de empleados después de eliminar
    }, error => {
      this.mensaje = 'Error al eliminar empleado';
      console.error('Error al eliminar empleado:', error);
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}