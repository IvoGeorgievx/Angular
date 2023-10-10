import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, LoaderComponent, RouterModule],
})
export class CoreModule {}
