import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
