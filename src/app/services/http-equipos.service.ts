import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpEquiposService {

  constructor(protected http:HttpClient) { }
  private baseUrl = 'http://127.0.0.1:8000/api'; // Cambia esto si tu backend tiene otra URL base

 
  getEquipos(){
    return this.http.get('http://127.0.0.1:8000/api/equipos',{responseType:'json'});

  }

  createEquipos(data:any){
    return this.http.post('http://127.0.0.1:8000/api/agregareq',data,{responseType:'json'});
  }

  deleteEquipos(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/equipos/${id}`, { responseType: 'json' });
  }   

  updateEquipos(id: number, data: any) {
    return this.http.put(`http://127.0.0.1:8000/api/equipos/${id}`, data, { responseType: 'json' });
  }


  private apiUrl = 'http://127.0.0.1:8000/api';


  getReportes() {
    return this.http.get(`${this.apiUrl}/reportes`);
  }

  createReporte(data: any) {
    return this.http.post(`${this.apiUrl}/reportes`, data);
  }


  sendEmail(emailData: any): Observable<any> {
    const url = `${this.baseUrl}/mail`;
    return this.http.post(url, emailData, { responseType: 'json' });
  }

}