import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserData } from '../types/reg.type';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3007';
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  register(data: UserData) {
    const url = `${this.url}/auth/register`;
    return this.http.post(url, data);
  }

  login(data: UserData) {
    const url = `${this.url}/auth/login`;
    return this.http.post(url, data);
  }

  getCurrentUser() {
    const url = `${this.url}/users/me`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { headers });
  }
}
