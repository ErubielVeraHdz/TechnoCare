import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ReportesService } from '../../services/reportes.service';
@Component({
  selector: 'app-servicios-admin',
  standalone: true,
  imports: [],
  templateUrl: './servicios-admin.component.html',
  styleUrl: './servicios-admin.component.css'
})
export class ServiciosAdminComponent {
  
  reportes:any;
  mensaje: any;

  constructor(private reporteService:ReportesService, public authService: AuthserviceService,  private router: Router){}

  ngOnInit(): void {
    this.reporteService.getReportes().subscribe(data=>{
      this.reportes = data;      
    });      
  }

  cargarReportes() {
    this.reporteService.getReportes().subscribe(data => {
      this.reportes = data;
    });
  }


  trackById(index: number, item: any) {
    return item.id;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
