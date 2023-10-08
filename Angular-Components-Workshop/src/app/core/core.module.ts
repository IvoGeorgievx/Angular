import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule],
  // Note: the NavComponent is exported so that it can be used in the AppModule
  exports: [NavComponent],
})
export class CoreModule {}
