import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistrationData } from '../types/reg.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegistrationData) {
    const url = 'http://localhost:3007/auth/register';
    return this.http.post(url, data);
  }
}
