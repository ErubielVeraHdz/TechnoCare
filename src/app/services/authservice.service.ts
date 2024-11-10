// authservice.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private usuario = { nombre: '', tipo: 0 };
  private isLoggedIn = false;

  saveUser(nombre: string, tipo: number) {
    this.usuario.nombre = nombre;
    this.usuario.tipo = tipo;
    this.isLoggedIn = true;
    console.log('Usuario guardado:', this.usuario); // Verificación
  }

  clearUser() {
    this.usuario = { nombre: '', tipo: 0 };
    this.isLoggedIn = false;
  }

  getUser() {
    return this.usuario;
  }

  get isAuthenticated() {
    return this.isLoggedIn;
  }
}
