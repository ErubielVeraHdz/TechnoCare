// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthserviceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  onLogin() {

    this.authService.login(this.loginForm.value.email, this.loginForm.value.contrasena).subscribe({
      next: (response) => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user.type === 'Administrador') {
          this.router.navigate(['/resumen']);
        } else {
          this.router.navigate(['/home']);  // Cambia esta ruta por la adecuada para el cliente
        }
      },
      error: (error) => {
        this.errorMessage = error.error.mensaje || 'Error al iniciar sesión';
      },
    });
  }  
}

