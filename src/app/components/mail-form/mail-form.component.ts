import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailequiposService } from '../../services/mailequipos.service'; 

@Component({
  selector: 'app-mail-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <label for="message">Mensaje:</label>
      <textarea id="message" [(ngModel)]="message" name="message"></textarea>
      <button type="submit">Enviar Correo</button>
    </form>
  `,
})
export class MailFormComponent {
  message = '';

  constructor(private MailequiposService: MailequiposService) {}

  onSubmit() {
    const data = { message: this.message };
    this.MailequiposService.sendMail(data).subscribe({
      next: () => alert('Correo enviado con éxito'),
      error: () => alert('Error al enviar el correo'),
    });
  }
}
