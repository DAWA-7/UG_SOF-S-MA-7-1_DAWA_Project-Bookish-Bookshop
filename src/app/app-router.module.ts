import { AgregarLibroComponent } from './cpanel1/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './cpanel1/cpanel-libro/listar-libro/listar-libro.component';
import {AgregarUserComponent} from './cpanel1/cpanel-user/agregar-user/agregar-user.component';
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./client/auth/login/login.component";
import {HomeComponent} from "./client/home/home.component";
import {MostrarCatalogoComponent} from './client/catalogo/mostrar-catalogo/mostrar-catalogo.component';
import {ListarUserComponent} from './cpanel1/cpanel-user/listar-user/listar-user.component';
import {RegisterComponent} from "./client/auth/register/register.component";
import {DetalleLibroComponent} from './client/catalogo/detalle-libro/detalle-libro.component';
import {CPanelComponent} from "./cpanel1/cpanel.component";
import {CPanelHomeComponent} from "./cpanel1/cpanel-home/cpanel-home.component";
import {ClientComponent} from "./client/client.component";

//route
const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'home', component: HomeComponent},
      {path: 'mostrar-catalogo', component: MostrarCatalogoComponent},
      {path: 'detalle-libro', component: DetalleLibroComponent}
    ]
  },
  {
    path: 'cpanel',
    component: CPanelComponent,
    children: [
      {
        path: '',
        component: CPanelHomeComponent
      },
      {path: 'lista-libros', component: ListarLibroComponent},
      {path: 'agregar-libros', component: AgregarLibroComponent},
      {
        path: 'users',
        component: ListarUserComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRouterModule {
}
