import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'] // Corregido, debe ser styleUrls
})
export class RegistrarseComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      departamento: [''],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
      // Aquí puedes manejar el envío del formulario
    } else {
      console.log('Formulario inválido');
    }
  }
}

