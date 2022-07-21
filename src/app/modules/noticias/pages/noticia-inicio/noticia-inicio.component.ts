import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-inicio',
  templateUrl: './noticia-inicio.component.html',
  styleUrls: ['./noticia-inicio.component.css'],
})
export class NoticiaInicioComponent implements OnInit {
  // #region Variable Declaration

  // #endregion

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // #region Functions
  openArticle() {
    this.router.navigate(['noticias/articulo']);
  }
  // #endregion
}
