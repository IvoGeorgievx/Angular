import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { LoaderComponent } from './core/loader/loader.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoaderComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
