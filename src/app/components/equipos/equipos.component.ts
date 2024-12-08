import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEquiposService } from '../../services/http-equipos.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent implements OnInit {
  equiposForm: FormGroup;
  notificacionForm: FormGroup;

  equipos: any;
  mensaje: any;
  equipoEditar: any = null;
  mostrarModal = false; // Controla la visibilidad del modal
  equipoSeleccionado: any; // Guarda el equipo seleccionado al notificar


  constructor(
    private formbuilder: FormBuilder,
    private equipoService: HttpEquiposService,
    public authService: AuthserviceService,
    private router: Router
  ) {
    // Formulario para agregar/editar equipos
    this.equiposForm = this.formbuilder.group({
      dispositivo: ['', Validators.required],
      marca: [''],
      numeroSerie: ['', Validators.required],
      modelo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoMantenimiento: ['']
    });

    // Formulario de notificación
    this.notificacionForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      idEquipo: ['', Validators.required],
      falla: ['', Validators.required],
      solucion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos() {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

  guardar() {
    if (this.equipoEditar) {
      // Si estamos editando, actualizamos el equipo
      this.equipoService.updateEquipos(this.equipoEditar.id, this.equiposForm.value).subscribe(data => {
        this.mensaje = 'Equipo actualizado con éxito';
        this.cargarEquipos();
        this.equipoEditar = null;
      });
    } else {
      // Si no estamos editando, creamos un nuevo equipo
      this.equipoService.createEquipos(this.equiposForm.value).subscribe(data => {
        this.mensaje = 'Equipo creado con éxito';
        this.cargarEquipos();
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
      this.mensaje = 'Equipo eliminado con éxito';
      this.cargarEquipos();
    }, error => {
      this.mensaje = 'Error al eliminar equipo';
      console.error('Error al eliminar equipo:', error);
    });
  }

  // Mostrar modal y prellenar el formulario de notificación
  abrirModalNotificacion(equipo: any) {
    this.equipoSeleccionado = equipo; // Guardar equipo seleccionado
    this.notificacionForm.patchValue({
      email : equipo.emailU,
      idEquipo: equipo.id,
      falla: equipo.descripcion
    });
    this.mostrarModal = true;
  }

  // Cerrar modal
  cerrarModal() {
    this.mostrarModal = false;
  }

  // Enviar reporte de notificación
  enviarReporte() {
    if (this.notificacionForm.valid) {
      console.log('Datos enviados:', this.notificacionForm.value);
      // Lógica para enviar datos al backend
      this.mensaje = 'Reporte enviado con éxito';
      this.cerrarModal();
    } else {
      console.log('Formulario de notificación no válido');
    }
  }

  trackById(index: number, item: any): number {
    return item.id; // Devuelve el ID del elemento para mejorar el rendimiento de *ngFor
  }
  

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
