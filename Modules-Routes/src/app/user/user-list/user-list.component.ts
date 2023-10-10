import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private loaderService: LoaderService
  ) {}
  userList: User[] = [];

  ngOnInit(): void {
    this.loaderService.showLoader();

    setTimeout(() => {
      this.userService.fetchUsers().subscribe((users) => {
        this.userList = users;
        this.loaderService.hideLoader();
      });
    }, 2000);
  }
}
