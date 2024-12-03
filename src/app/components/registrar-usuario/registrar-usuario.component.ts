import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      contrasena: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  async guardar() {
    if (this.registroForm.valid) {
      const usuario = {
        name: this.registroForm.value.nombre,
        lastname: this.registroForm.value.apellido,
        email: this.registroForm.value.email,
        phone: this.registroForm.value.telefono,
        password: this.registroForm.value.contrasena,
        type: this.registroForm.value.type
      };
  
      console.log('Tipo de usuario seleccionado:', this.registroForm.value.type);
      console.log('Datos a enviar:', usuario);
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Usuario registrado:', data);
        alert('Usuario registrado con éxito');

        this.router.navigate(['/resumen']);

      } catch (error) {
        if (error instanceof Error) {
          console.error('Error al registrar usuario:', error);
          alert(`Error al registrar usuario: ${error.message}`);
        } else {
          console.error('Error inesperado:', error);
          alert('Error inesperado al registrar usuario');
        }
      }
    }
  }  
}
