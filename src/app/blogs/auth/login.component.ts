import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  loginSubmit(formLogin: NgForm) {
    console.log(formLogin?.form?.value)
  }
}
