import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { HttpUsuariosService } from '../../services/http-usuarios.service';
import { AuthserviceService } from '../../services/authservice.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  private formbuilder = new FormBuilder();
  equiposForm = this.formbuilder.group({
    dispositivo: ['', Validators.required],
      marca: [''],
      numeroSerie: ['', Validators.required],
      modelo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoMantenimiento: ['']
  })

  usuarios:any;
  mensaje: any;
  usuarioEditar: any = null;

  constructor(private usuarioService:HttpUsuariosService, public authService: AuthserviceService,  private router: Router){}

  cargarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data=>{
      this.usuarios = data;      
    });      
  }

   guardar() {
    if (this.usuarioEditar) {
      // Si estamos editando, actualizamos el empleado
      this.usuarioService.updateUsuario(this.usuarioEditar.id, this.usuarioEditar.value).subscribe(data => {
        this.mensaje = 'Empleado actualizado con éxito';
        console.log(this.mensaje);
        this.cargarUsuarios(); // Recargar la lista de empleados después de actualizar
        this.usuarioEditar = null; // Limpiar la variable después de la actualización
      });
    } else {
      // Si no estamos editando, creamos un nuevo empleado
      this.usuarioService.createUsuario(this.usuarioEditar.value).subscribe(data => {
        this.mensaje = 'Empleado creado con éxito';
        console.log(this.mensaje);
        this.cargarUsuarios(); // Recargar la lista de empleados después de crear
      });
    }
  }

  editar(equipo: any) {
    this.usuarioEditar = equipo;
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
    this.usuarioService.deleteUsuario(id).subscribe(data => {
      this.mensaje = 'Empleado eliminado con éxito';
      console.log(this.mensaje);
      this.cargarUsuarios(); // Recargar la lista de empleados después de eliminar
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