import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public frmLogin: FormGroup;
  public hide: boolean = true;
  date = new FormControl(new Date());

  constructor( private formBuilder: FormBuilder, private router: Router) {
    this.frmLogin = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email]
    });

  }
  onSubmit(){

  }


  getErrorMessage(){
    if (this.frmLogin != null){
      if (this.frmLogin.get('email')!.hasError('required')) {
        return 'Debe introducir un E-mail.';
      }

      return this.frmLogin.get('email')!.hasError('email') ? 'E-mail invalido.' : '';
    }
    return '';
  }

}
