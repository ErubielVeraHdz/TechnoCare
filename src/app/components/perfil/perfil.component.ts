import { Component } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';
import { HttpUsuariosService } from '../../services/http-usuarios.service';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule], 
  providers: [/*HttpUsuariosService*/],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuariosForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private UsuariosService: HttpUsuariosService, 
    public authService: AuthserviceService, 
    private router: Router
  ) {
    this.usuariosForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        newPassword: [''],  // Contraseña opcional
        confirmPassword: ['']  // Confirmación opcional
      },
      { validators: this.passwordMatchValidator } // Aplicar validador aquí
    );
  }

  usuarios: any;
  usuarioEditar: any;
  mensaje: any;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id;
  
    this.authService.obtenerUsuario(userId).subscribe(
      (data) => {
        this.usuarios = data;
        this.usuarioEditar = data; // Inicializa usuarioEditar aquí
        this.usuariosForm.patchValue({
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone
        });
      },
      (error) => {
        console.error('Error al obtener los detalles del usuario', error);
      }
    );
  }

  // Validador personalizado para contraseñas coincidentes
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Función para actualizar los datos
  actualizar(): void {
    if (this.usuariosForm.valid) {
      const updatedUser = this.usuariosForm.value;
  
      // Si los campos de contraseña están vacíos, eliminamos las propiedades relacionadas
      if (!updatedUser.newPassword) {
        delete updatedUser.newPassword;
        delete updatedUser.confirmPassword;
      }
  
      // Llamar al servicio para actualizar el usuario
      this.UsuariosService.updateUsuario(this.usuarioEditar.id, updatedUser).subscribe(data => {
        this.mensaje = 'Usuario actualizado con éxito';
        this.usuariosForm.reset();  // Reseteamos el formulario
        this.usuarioEditar = null;  // Limpiamos la edición
  
      
      }, error => {
        console.error('Error al actualizar el usuario', error);
        this.mensaje = 'Hubo un error al actualizar el usuario';
      });
    } else {
      console.log('Formulario no válido');
    }
  }
  

  // Función para iniciar la edición del perfil
  editProfile(usuarios: any) {
    this.usuarioEditar = usuarios;
    this.usuariosForm.setValue({
      name: usuarios.name,
      lastname: usuarios.lastname,
      email: usuarios.email,
      phone: usuarios.phone,
      newPassword: '',  // Dejamos en blanco los campos de contraseña
      confirmPassword: ''
    });
  }

  // Función de cierre de sesión
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
