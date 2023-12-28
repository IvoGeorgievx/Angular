import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NavComponent, RegistrationComponent],
})
export class HeaderModule {}
