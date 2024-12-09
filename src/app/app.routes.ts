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
import { ServiciosAdminComponent } from './components/servicios-admin/servicios-admin.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';


export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "header", component: HeaderMenuComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "registrarse", component: RegistrarseComponent },
    { path: "iniciar sesion", component: LoginComponent },
    { path: "registrar-dispositivo", component: FomularioDispositivoComponent },
    { path: "resumen", component: ResumenComponent },
    { path: "clientes", component: ClientesComponent },
    { path: "equipos", component: EquiposComponent },
    { path: "reportes", component: ServiciosAdminComponent },
    { path: "adminhome", component: AdminComponent },
    { path: "adminmenu", component: HeaderAdminComponent },
    { path: "perfil", component: PerfilComponent },
    { path: "registrarusuario", component: RegistrarUsuarioComponent},
    { path: "serviciosAdmin", component: ServiciosAdminComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];
