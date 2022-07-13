import {AgregarUserComponent} from './client/user/agregar-user/agregar-user.component';
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./client/auth/login/login.component";
import {HomeComponent} from "./client/home/home.component";
import {ListarCatalogoComponent} from './client/catalogo/listar-catalogo/listar-catalogo.component';
import {MostrarCatalogoComponent} from './client/catalogo/mostrar-catalogo/mostrar-catalogo.component';
import {ListarUserComponent} from './client/user/listar-user/listar-user.component';
import {RegisterComponent} from "./client/auth/register/register.component";
import {DetalleLibroComponent} from './client/catalogo/detalle-libro/detalle-libro.component';
import {CPanelComponent} from "./cpanel1/cpanel.component";
import {CPanelHomeComponent} from "./cpanel1/cpanel-home/cpanel-home.component";
import {CrudlibrosComponent} from "./cpanel1/crudlibros/crudlibros.component";
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
      {path: 'agregar-user', component: AgregarUserComponent},
      {path: 'listar-user', component: ListarUserComponent},
      {path: 'listar-catalogo', component: ListarCatalogoComponent},
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
      {
        path: 'crudlibros',
        component: CrudlibrosComponent
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
