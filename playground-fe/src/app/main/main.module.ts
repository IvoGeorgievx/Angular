import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TodosComponent, CreateTodoComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent, CreateTodoComponent, HomeComponent],
})
export class MainModule {}
