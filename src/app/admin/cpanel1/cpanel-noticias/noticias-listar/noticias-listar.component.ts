import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-noticias-listar',
  templateUrl: './noticias-listar.component.html',
  styleUrls: ['./noticias-listar.component.css'],
})
export class NoticiasListarComponent implements OnInit {
  //#region Variables
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['id_libro', 'titulo', 'editorial', 'autor', 'opciones'];
  //#endregion

  constructor() {}

  ngOnInit(): void {}

  //#region Functions
  openDialog() {}

  applyFilter(event: Event) {}

  //#endregion
}
