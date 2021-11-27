import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './blogs/auth/login.component';
import { LoginModule } from './blogs/auth/login.module';
import { SignupComponent } from './blogs/auth/signup.component';
import { SignupModule } from './blogs/auth/signup.module';
import { CreateComponent } from './blogs/create.component';
import { CreateModule } from './blogs/create.module';
import { IndexComponent } from './blogs/index.component';
import { IndexModule } from './blogs/index.module';

// import { PartialsModule } from './blogs/partials/partials.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IndexModule,
    CreateModule,
    FormsModule,
    LoginModule,
    SignupModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "create", component: CreateComponent },
      { path: "edit/:id", component: CreateComponent },
      { path: "delete/:id", component: CreateComponent },
      { path: "signup", component: SignupComponent },
      { path: "login", component: LoginComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
