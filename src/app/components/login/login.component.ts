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

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  onLogin() {
    console.log('Intentando iniciar sesión...'); // Verificación
    if (this.loginForm.valid) {
      const tipoUsuario = this.loginForm.value.email === 'admin@example.com' ? 1 : 2;
      this.authService.saveUser(this.loginForm.value.email, tipoUsuario);
  
      const redirectRoute = tipoUsuario === 1 ? '/adminhome' : '/home';
      this.router.navigate([redirectRoute]);
    } else {
      console.log('Formulario de inicio de sesión inválido');
    }
  }  
}

