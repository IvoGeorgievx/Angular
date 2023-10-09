import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [MainComponent],
})
export class CoreModule {}
