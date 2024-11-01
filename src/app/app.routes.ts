import { Routes } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { LoginComponent } from './components/login/login.component';
import { FomularioDispositivoComponent } from './components/formulario-dispositivo/formulario-dispositivo.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosAdminComponent } from './servicios-admin/servicios-admin.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {
        path:"header",
        component:HeaderMenuComponent
    },

        {
            path:"nosotros",
            component:NosotrosComponent
        },
        {
            path:"servicios",
            component: ServiciosComponent
        },
    {
        path:"registrarse",
        component:RegistrarseComponent
    },
    {
        path:"iniciar sesion",
        component:LoginComponent
    },
    {
        path:"registrar-dispositivo",
        component:FomularioDispositivoComponent
    },
    {
       path:"admin",
       component: ServiciosAdminComponent,
    },
    {
       path:"clientes",
       component:ClientesComponent
    },
    {
       path:"resumen",
       component:ResumenComponent
    },
    {
       path:"equipos",
       component:EquiposComponent
    },
    {
      path:"admin-clientes",
      component:AdminClientesComponent
   },






];
