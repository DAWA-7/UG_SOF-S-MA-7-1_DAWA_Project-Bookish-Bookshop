import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiaInicioComponent } from './pages/noticia-inicio/noticia-inicio.component';
import { NoticiaArticuloComponent } from './pages/noticia-articulo/noticia-articulo.component';
import { NoticiaCard1Component } from './components/noticia-card1/noticia-card1.component';
import { NoticiaCard2Component } from './components/noticia-card2/noticia-card2.component';
import { MaterialNoticiasModule } from './material-noticias/material-noticias.module';
import { NoticiaArticulo1Component } from './components/noticia-articulo1/noticia-articulo1.component';

@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaInicioComponent,
    NoticiaArticuloComponent,
    NoticiaCard1Component,
    NoticiaCard2Component,
    NoticiaArticulo1Component,
  ],
  imports: [CommonModule, NoticiasRoutingModule, MaterialNoticiasModule],
})
export class NoticiasModule {}
