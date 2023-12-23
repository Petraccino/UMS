import { HttpClient } from '@angular/common/http';
import { User } from './../classes/user';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

interface UsersResponse {
  body: User[];
  message: string;
  success: boolean;
}

interface UserResponse {
  body: User;
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(this.apiurl)
      .pipe(map((resp) => resp.body));
  }
  getUser(id: number): Observable<User> {
    return this.http
      .get<UserResponse>(this.apiurl + '/' + id)
      .pipe(map((resp) => resp.body));
  }
  deleteUser(user: User): Observable<User> {
    return this.http
      .delete<UserResponse>(this.apiurl + '/' + user.id)
      .pipe(map((resp) => resp.body));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<UserResponse>(this.apiurl + '/' + user.id, user)
      .pipe(map((resp) => resp.body));
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<UserResponse>(this.apiurl, user)
      .pipe(map((resp) => resp.body));
  }
}
