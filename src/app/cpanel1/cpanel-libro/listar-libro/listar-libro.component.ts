import { CatalogoService } from './../../../services/catalogo.service';
import { Component} from '@angular/core';
import { Book } from 'src/app/client/interfaces/book';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent{

  listLibros: Book[] = []
  displayedColumns: string[] = ['id_libro', 'titulo', 'editorial', 'autor', 'opciones'];
  //para llamar al matdialog
  dataSource = new MatTableDataSource<any>;

  constructor(private catalogService: CatalogoService, public dialog: MatDialog) {
  }

  openDialog() {

    this.dialog.open(AgregarLibroComponent);
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.listLibros = this.catalogService.getLibro();
    this.dataSource = new MatTableDataSource(this.listLibros);

  }

  editLibro(element: any) {
    this.dialog.open(AgregarLibroComponent, {
      data: element

    })


  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  verDetalle(element: any){
    this.dialog.open(AgregarLibroComponent, {
      data: element

    })
  }

}
