import { HttpClient } from '@angular/common/http';
import { User } from './../classes/user';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = environment.API_URL;

  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiurl + '/' + id);
  }
  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(this.apiurl + '/' + user.id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiurl + '/' + user.id, user);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiurl, user);
  }
}
