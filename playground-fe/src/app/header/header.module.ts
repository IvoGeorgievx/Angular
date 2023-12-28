import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CurrentUserComponent } from './current-user/current-user.component';

@NgModule({
  declarations: [
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    CurrentUserComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NavComponent, RegistrationComponent, LoginComponent],
})
export class HeaderModule {}
