import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Todo } from 'src/app/types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url: string = 'http://localhost:3007';
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getTodos() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Todo[]>(`${this.url}/todos/mine`, { headers });
  }

  markAsCompleted(todo: Todo) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Todo>(`${this.url}/todos/${todo.id}`, {
      headers,
    });
  }

  createTodo(data: object) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Todo>(`${this.url}/todos/create`, data, {
      headers,
    });
  }
}
