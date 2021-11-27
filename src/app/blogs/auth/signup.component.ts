import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent {
  constructor() { }

  onSignupSubmit(formRegister: NgForm) {
    console.log(formRegister?.form?.value);
  }

}
