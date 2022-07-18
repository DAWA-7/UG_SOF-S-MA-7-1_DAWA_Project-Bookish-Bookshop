import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WindowModelService } from '../../services/window-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // Variable declarations
  isActiveInicio = true;
  isActiveCatalogo = false;
  isActiveNoticias = false;
  isActiveSugerencias = false;
  // listSections = ['Inicio', 'Catálogo', 'Noticias', 'Sugerencias'];
  isLogged!: boolean;

  constructor(
    private service: WindowModelService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.isLogged = false;
    this.service.$modal.subscribe((valor) => {
      this.isLogged = valor;
      console.log('valor: ' + valor);
    });
  }

  ngOnInit(): void {}

  //#region Functions
  sendLogin(): void {
    if (this.router != null) {
      this.router.navigate(['login']);
    }
  }

  cerrarSesion() {
    this.router.navigate(['/home']);
    this.service.$modal.emit(false);
  }

  navigateTo(module: string) {
    this.isActiveInicio = false;
    this.isActiveCatalogo = false;
    this.isActiveNoticias = false;
    this.isActiveSugerencias = false;
    switch (module) {
      case 'Inicio':
        this.router.navigate(['/home']);
        this.isActiveInicio = true;
        break;
      case 'Catálogo':
        this.router.navigate(['//mostrar-catalogo']);
        this.isActiveCatalogo = true;
        break;
      case 'Noticias':
        this.router.navigate(['/noticias']);
        this.isActiveNoticias = true;
        break;
    }
  }
  //#endregion
}
