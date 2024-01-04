import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private auth: AuthService) {}
  getAuthHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.getToken(),
    });
  }
}
