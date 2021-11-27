import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PartialsModule } from '../partials/partials.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [PartialsModule,FormsModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule { }
