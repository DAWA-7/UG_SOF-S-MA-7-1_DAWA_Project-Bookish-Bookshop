import { Component, OnInit } from '@angular/core';
import DirectoryShortcut from 'src/assets/json/short-directory.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //#region Variable declaration
  listNewsHighlight: { img: string; title: string }[] = [
    {
      img: '@newsH/autora.jpg',
      title:
        'La autora ecuatoriana Victoria Vaccaro gana el Premio Internacional de poesía Ana María Iza',
    },
    {
      img: 'assets/img/modules/noticias/highlight/lectura.jpg',
      title:
        'Los ecuatorianos leen un libro completo al año de media, según encuesta',
    },
    {
      img: 'assets/img/modules/noticias/highlight/rodrigo.jpg',
      title: 'Las crónicas que moldearon la vida del periodista Rodrigo Alonso',
    },
    {
      img: 'assets/img/modules/noticias/highlight/ruiseñor.jpg',
      title:
        'Universo de Libros: El papá perfecto que soñaba con la igualdad que la escritora Harper Lee creó en ‘Matar a un ruiseñor’',
    },
    {
      img: 'assets/img/modules/noticias/highlight/ulises.jpg',
      title: 'El mundo cultural en los años del ‘Ulises’ de Joyce',
    },
  ];
  //#endregion

  constructor() {}

  ngOnInit(): void {}
}
