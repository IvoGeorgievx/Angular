import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './header/registration/registration.component';
import { NavComponent } from './header/nav/nav.component';
import { LoginComponent } from './header/login/login.component';
import { CurrentUserComponent } from './header/current-user/current-user.component';
import { LogoutComponent } from './header/logout/logout.component';
import { TodosComponent } from './main/todos/todos.component';
import { CreateTodoComponent } from './main/create-todo/create-todo.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'users/me',
    component: CurrentUserComponent,
  },
  {
    path: 'my-todos',
    component: TodosComponent,
  },
  {
    path: 'create-todo',
    component: CreateTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
