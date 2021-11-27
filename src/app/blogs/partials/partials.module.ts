import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, RouterModule
  ],
  declarations: [
    FooterComponent, HeaderComponent
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class PartialsModule { }
