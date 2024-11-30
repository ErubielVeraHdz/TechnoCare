import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUsuariosService {

  constructor(private http: HttpClient) {}

  getUsuarios(){
    return this.http.get('http://127.0.0.1:8000/api/usuarios',{responseType:'json'});

  }

  createUsuario(data:any){
    return this.http.post('http://127.0.0.1:8000/api/agregar',data,{responseType:'json'});
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/usuarios/${id}`, { responseType: 'json' });
  }   

  updateUsuario(id: number, data: any) {
    return this.http.put(`http://127.0.0.1:8000/api/usuarios/${id}`, data, { responseType: 'json' });
  }


}