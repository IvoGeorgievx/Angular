import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent, CreateTodoComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, TableModule],
  exports: [TodosComponent, CreateTodoComponent, HomeComponent],
})
export class MainModule {}
