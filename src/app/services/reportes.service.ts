import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
  getReportes() {
    return this.http.get(`${this.apiUrl}/reportes`);
  }

  createReporte(data: any) {
    return this.http.post(`${this.apiUrl}/reportes`, data);
  }
}
