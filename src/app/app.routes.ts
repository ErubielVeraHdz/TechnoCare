import { Routes } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { LoginComponent } from './components/login/login.component';
import { FomularioDispositivoComponent } from './components/formulario-dispositivo/formulario-dispositivo.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

export const routes: Routes = [
    {
        path:"", component:HomeComponent
    },

    {
        path:"nosotros",
        component:NosotrosComponent
    },

    {
        path:"servicios", 
        component:ServiciosComponent
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
    }
];
