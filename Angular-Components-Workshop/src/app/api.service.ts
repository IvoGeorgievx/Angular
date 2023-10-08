import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, USER_URL } from './urls/main';
import { Post } from './types/post';
import { User } from './types/users';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public posts: Post[] = [];

  getPosts() {
    return this.http.get<Post[]>(`${API_URL}`);
  }

  getUsers() {
    return this.http.get<User[]>(`${USER_URL}`);
  }
}
