import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  registroForm: FormGroup;
  registroExitoso = false;

  constructor(private fb: FormBuilder, private router: Router) {
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
      this.registroExitoso = true;
      console.log('Formulario válido:', this.registroForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  regresarHome() {
    this.router.navigate(['/home']);
  }
}

