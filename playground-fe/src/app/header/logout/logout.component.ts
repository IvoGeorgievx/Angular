import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(
      (loggedIn) => (this.loggedIn = loggedIn)
    );
    this.loggedIn = this.loggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
