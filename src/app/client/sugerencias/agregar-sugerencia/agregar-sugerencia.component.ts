import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-sugerencia',
  templateUrl: './agregar-sugerencia.component.html',
  styleUrls: ['./agregar-sugerencia.component.css']
})
export class AgregarSugerenciaComponent implements OnInit {

  ingresarSugerencia!: FormGroup
  public isRegistered: boolean = false;

  constructor() {
  }

  onSubmit() {
    this.isRegistered = true;
    setTimeout(() => {
      this.isRegistered = false;
    }, 3000)
    console.log(this.ingresarSugerencia.value)
  }

  ngOnInit(): void {
    this.ingresarSugerencia = new FormGroup({
      autor: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      edicion: new FormControl('', Validators.required),
      editor: new FormControl('', Validators.required),
      fechapublicacion: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      razones: new FormControl('', Validators.required)
    })
  }

}
