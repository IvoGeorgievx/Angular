import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  toDoForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.toDoForm = this.formBuilder.group({
      title: [''],
    });
  }

  onSubmit() {
    if (this.toDoForm.valid) {
      const userData = this.toDoForm.value;
      this.todoService.createTodo(userData).subscribe((response) => {
        console.log(response);
        this.router.navigate(['/my-todos']);
      });
    }
  }
}
