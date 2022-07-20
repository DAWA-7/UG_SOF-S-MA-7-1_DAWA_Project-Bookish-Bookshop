import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {WindowModelService} from "../../../services/window-model.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public frmLogin: FormGroup;
  public hide: boolean = true;
  date = new FormControl(new Date());
  public isRegistered: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private service: WindowModelService) {
    this.frmLogin = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email]
    });

  }

  onSubmit(nombres: string, apellidos: string, usuario: string, contrasena: string, email: string) {
    this.isRegistered = true;
    this.service.$modal.emit(usuario);
    setTimeout(() =>{
      this.router.navigate(['/home']);
    },3000)
  }


  getErrorMessage() {
    if (this.frmLogin != null) {
      if (this.frmLogin.get('email')!.hasError('required')) {
        return 'Debe introducir un E-mail.';
      }

      return this.frmLogin.get('email')!.hasError('email') ? 'E-mail invalido.' : '';
    }
    return '';
  }

}
