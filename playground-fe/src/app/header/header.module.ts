import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    CurrentUserComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, IonicModule],
  exports: [
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
  ],
})
export class HeaderModule {}
