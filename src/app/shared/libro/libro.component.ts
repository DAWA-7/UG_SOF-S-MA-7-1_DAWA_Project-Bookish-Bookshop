import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() id_libro = 0;
  @Input() autor = "";
  @Input() editorial = "";
  @Input() id_categoria = 0;
  @Input() fecha_publicacion = 12/12/21;
  @Input() num_paginas = 0;
  @Input() isbn = "";    
  @Input() descripcion = "";
  @Input() titulo = "";
  @Input() precio = 10.00;

  constructor() { }

  ngOnInit(): void {
  }

}
