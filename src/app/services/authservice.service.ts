import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private currentUser: any = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap((response: any) => {
        this.currentUser = response.user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        localStorage.setItem('token', response.token); // Guardar token
      })
    );
  }
  getEquipos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/equipos/`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/`);
  }


  getReportes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reportes/`);
  }

  getLoggedInUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  obtenerUsuario(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${id}`);
  }

  obtenerCorreo(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${email}`);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
