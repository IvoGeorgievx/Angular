import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

import { UserData } from '../../types/reg.type';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3007';
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  constructor(private http: HttpClient, private tokenService: TokenService) {
    const token = this.tokenService.getToken();
    if (token) {
      this.loggedIn.next(true);
    }
  }

  register(data: UserData) {
    const url = `${this.url}/auth/register`;
    return this.http.post(url, data);
  }

  login(data: UserData) {
    const url = `${this.url}/auth/login`;
    return this.http.post(url, data).pipe(
      tap((result: any) => {
        const token = result.token;
        this.tokenService.setToken(token);
        this.loggedIn.next(true);
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
    this.loggedIn.next(false);
  }

  getCurrentUser() {
    const url = `${this.url}/users/me`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { headers });
  }
}
