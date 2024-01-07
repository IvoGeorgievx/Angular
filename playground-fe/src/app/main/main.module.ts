import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, CreateTodoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent, CreateTodoComponent],
})
export class MainModule {}
