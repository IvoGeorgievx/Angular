import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  toDoForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.toDoForm = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  onSubmit() {
    if (this.toDoForm.valid) {
      const userData = this.toDoForm.value;
      this.todoService.createTodo(userData).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
