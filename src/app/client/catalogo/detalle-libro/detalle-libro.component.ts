import { CatalogoService } from './../../../services/catalogo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css'],
})
export class DetalleLibroComponent implements OnInit {
  InputLibros: any;
  newsItem: any;

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    /*this._service.currentNewsItem.subscribe(
      (newCategoria) => (this.newCategoria = newCategoria)
    );*/
    this.InputLibros = this.newsItem;
    //this.InputCategorias = this.newCategoria;
  }
}
