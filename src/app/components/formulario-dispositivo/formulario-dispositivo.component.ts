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

  onSubmit() {
    if (this.dispositivoForm.valid) {
      console.log('Formulario enviado:', this.dispositivoForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}