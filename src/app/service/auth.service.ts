import { User } from './../classes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, last, of, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { jwt } from '../interface/jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: BehaviorSubject<User | null>;
  public isLoggedIn$: Observable<User | null>;
  apiauthurl = environment.API_AUTH_URL;

  constructor(private http: HttpClient) {
    this.isLogged = new BehaviorSubject<User | null>(this.getUser());
    this.isLoggedIn$ = this.isLogged.asObservable();
  }
  signIn(email: string, password: string): Observable<User> {
    return this.http
      .post<jwt>(this.apiauthurl + '/login', { email, password })
      .pipe(
        switchMap((response) => {
          localStorage.setItem('jwt', response.access_token);
          const user = new User();
          user.name = response.name;
          user.email = response.email;
          this.isLogged.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          return of(user);
        })
      );
  }
  signUp(name: string, email: string, password: string): Observable<User> {
    return this.http
      .post<jwt>(this.apiauthurl + '/signup', { email, password , name})
      .pipe(
        switchMap((response) => {
          localStorage.setItem('jwt', response.access_token);
          const user = new User();
          user.name = response.name;
          user.email = response.email;
          this.isLogged.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          return of(user);
        })
      );
  }
  isUserLogin(): boolean {
    return !!this.getUser();
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.isLogged.next(null);
  }
  private getUser(): User | null {
    const user = localStorage.getItem('user');
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }
  public getToken() {
    return localStorage.getItem('jwt')
  }
}
