import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../types/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
