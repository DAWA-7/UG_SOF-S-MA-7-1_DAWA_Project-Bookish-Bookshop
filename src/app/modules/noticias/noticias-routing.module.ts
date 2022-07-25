import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoticiasComponent} from './noticias.component';
import {NoticiaArticuloComponent} from './pages/noticia-articulo/noticia-articulo.component';
import {NoticiaInicioComponent} from './pages/noticia-inicio/noticia-inicio.component';

const routes: Routes = [
  {
    path: 'noticias',
    component: NoticiasComponent,
    children: [
      {path: '', component: NoticiaInicioComponent},
      {path: 'inicio', component: NoticiaInicioComponent},
      {path: 'articulo', component: NoticiaArticuloComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {
}
