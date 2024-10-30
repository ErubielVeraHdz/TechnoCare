import { Routes } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { LoginComponent } from './components/login/login.component';
import { FomularioDispositivoComponent } from './components/formulario-dispositivo/formulario-dispositivo.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
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
