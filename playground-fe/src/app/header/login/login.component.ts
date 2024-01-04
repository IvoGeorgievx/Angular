import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
    });
  }

  onSubmit() {
    const userData = this.loginForm.value;
    this.authService.login(userData).subscribe((result: any) => {
      this.router.navigate(['/']);
    });
  }

  updateEmail(event: any) {
    // autofill from the browser sends empty payload in email field, this prevents it
    this.loginForm.get('email')?.setValue(event.target.value);
  }
}
