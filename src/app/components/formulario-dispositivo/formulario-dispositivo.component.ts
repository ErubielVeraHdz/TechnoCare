import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-dispositivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-dispositivo.component.html',
  styleUrl: './formulario-dispositivo.component.css'
})
export class FomularioDispositivoComponent {
  dispositivoForm: FormGroup;
  marcas: string[] = [];

  constructor(private fb: FormBuilder) {
    this.dispositivoForm = this.fb.group({
      dispositivo: ['', Validators.required],
      marca: [''],
      numeroSerie: ['', Validators.required],
      modelo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoMantenimiento: ['']
    });
  }

  Dispositivo() {
    const dispositivo = this.dispositivoForm.get('dispositivo')?.value;
    this.Marcas(dispositivo);
  }

  Marcas(dispositivo: string) {
    switch (dispositivo) {
      case 'impresora':
        this.marcas = ['HP', 'Canon', 'Epson', 'Brother'];
        break;
      case 'laptop':
        this.marcas = ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus'];
        break;
      case 'computadora':
        this.marcas = ['HP', 'Dell', 'Lenovo', 'Acer'];
        break;
      case 'tablet':
        this.marcas = ['Apple', 'Samsung', 'Huawei'];
        break;
      default:
        this.marcas = [];
    }
  }

  async guardar() {
    if (this.dispositivoForm.valid) {
      const usuarioLogueado = localStorage.getItem('user');
      const user = usuarioLogueado ? JSON.parse(usuarioLogueado) : null;
  
      const dispositivos = {
        dispositivo: this.dispositivoForm.value.dispositivo,
        numserie: this.dispositivoForm.value.numeroSerie,
        modelo: this.dispositivoForm.value.modelo,
        descripcion: this.dispositivoForm.value.descripcion,
        tipomto: this.dispositivoForm.value.tipoMantenimiento,
        nombreU: user ? user.name : 'Usuario Desconocido'
      };
  
      console.log('Datos a enviar al backend:', dispositivos);
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/equipos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dispositivos)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Equipo registrado:', data);
        alert('Equipo registrado con éxito');
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error al registrar equipo:', error);
          alert(`Error al registrar equipo: ${error.message}`);
        } else {
          console.error('Error inesperado:', error);
          alert('Error inesperado al registrar equipo');
        }
      }
    }
  }
    
}