import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-mostrar-catalogo',
  templateUrl: './mostrar-catalogo.component.html',
  styleUrls: ['./mostrar-catalogo.component.css']
})
export class MostrarCatalogoComponent implements OnInit {

  libros: Book[] = [
    {id_libro: 1, autor: "Stephanie Garber", editorial: "string", id_categoria: 0, fecha_publicacion: new Date(12/12/2022),
    num_paginas: 0, isbn: "string", descripcion: "string", titulo: "Caraval", precio: 55.00},
    {id_libro: 2, autor: "Gleen Black", editorial: "string", id_categoria: 0, fecha_publicacion: new Date(12/12/2022),
    num_paginas: 0, isbn: "string", descripcion: "string", titulo: "Bratva", precio: 52.00},
    {id_libro: 3, autor: "string", editorial: "string", id_categoria: 0, fecha_publicacion: new Date(12/12/2022),
    num_paginas: 0, isbn: "string", descripcion: "string", titulo: "string", precio: 12.00},
    {id_libro: 4, autor: "string", editorial: "string", id_categoria: 0, fecha_publicacion: new Date(12/12/2022),
    num_paginas: 0, isbn: "string", descripcion: "string", titulo: "string", precio: 32.00},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
