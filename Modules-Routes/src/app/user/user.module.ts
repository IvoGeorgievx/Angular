import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, CoreModule],
  exports: [UserListComponent],
})
export class UserModule {}
