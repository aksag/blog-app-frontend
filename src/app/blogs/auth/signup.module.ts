import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PartialsModule } from '../partials/partials.module';

import { SignupComponent } from './signup.component';

@NgModule({
  imports: [PartialsModule, FormsModule],
  exports: [SignupComponent],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
