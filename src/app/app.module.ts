import { MostrarCatalogoComponent } from './client/catalogo/mostrar-catalogo/mostrar-catalogo.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouterModule} from './app-router.module';
import {MaterialModule} from './client/material/material.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './client/header/header.component';
import {FooterComponent} from './client/footer/footer.component';
import {LoginComponent} from './client/auth/login/login.component';
import {HomeComponent} from './client/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgregarUserComponent} from './cpanel1/cpanel-user/agregar-user/agregar-user.component';
import {ListarUserComponent} from './cpanel1/cpanel-user/listar-user/listar-user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RegisterComponent} from './client/auth/register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from '@angular/material/grid-list';
import { DetalleLibroComponent } from './client/catalogo/detalle-libro/detalle-libro.component';
import {CPanelComponent} from "./cpanel1/cpanel.component";
import {CPanelHomeComponent} from "./cpanel1/cpanel-home/cpanel-home.component";
import {CrudlibrosComponent} from "./cpanel1/cpanel-crudlibros/crudlibros.component";
import {ClientComponent} from "./client/client.component";
import {ListarCatalogoComponent} from "./client/catalogo/listar-catalogo/listar-catalogo.component";
import {MatMenuModule} from "@angular/material/menu";
import { LibroComponent } from './shared/libro/libro.component';
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ListarUserComponent,
    AgregarUserComponent,
    RegisterComponent,
    MostrarCatalogoComponent,
    DetalleLibroComponent,
    CPanelComponent,
    CPanelHomeComponent,
    CrudlibrosComponent,
    ClientComponent,
    ListarCatalogoComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, MatGridListModule, MatMenuModule, MatSortModule
  ],
  entryComponents: [LoginComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
