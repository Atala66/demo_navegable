import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  isValidForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
       // tslint:disable-next-line:variable-name
    private _routerSrv: Router

  ) { }

  ngOnInit() {
    this.initLoginForm();
   }

   public initLoginForm() {
     this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });
   }


   submit() {
    console.log(this.loginForm.value);
    this.validateForm();
  }


  public validateForm() {
     console.log('valida el formulario');
     this._routerSrv.navigate(['home']);
  }

}
