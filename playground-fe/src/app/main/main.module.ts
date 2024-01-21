import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeComponent} from './home/home.component';
import {IonicModule} from "@ionic/angular";

import {CreateTodoComponent} from './create-todo/create-todo.component';
import {TodosComponent} from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent, CreateTodoComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  exports: [TodosComponent, CreateTodoComponent, HomeComponent],
})
export class MainModule {
}
