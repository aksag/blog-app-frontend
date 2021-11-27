import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './create.component';
import { PartialsModule } from './partials/partials.module';




@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PartialsModule
  ],
  exports: [CreateComponent]
})
export class CreateModule { }
