import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-card1',
  templateUrl: './noticia-card1.component.html',
  styleUrls: ['./noticia-card1.component.css'],
})
export class NoticiaCard1Component implements OnInit {
  // #region Variable Declaration
  @Input() id = 0;
  @Input() title = '';
  @Input() author = '';
  @Input() img = '';
  @Input() date = '';
  @Input() content = '';

  // #endregion

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // #region Functions
  openArticle() {
    this.router.navigate(['noticias/articulo']);
  }
  // #endregion
}
