import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLogged: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;
  token: string = 'token';

  constructor() {
    this.isLogged = new BehaviorSubject<boolean>(this.hasToken());
    this.isLoggedIn$ = this.isLogged.asObservable();
  }
  signIn(email: string, password: string): void {
    localStorage.setItem('jwt', this.token);
    this.isLogged.next(true);
  }
  signUp(usurname: string, email: string, password: string): void {
    localStorage.setItem('jwt', this.token);
    this.isLogged.next(true);
  }
  isUserLogin(): boolean {
    return this.hasToken();
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    this.isLogged.next(false);
  }
  private hasToken(): boolean {
    return Boolean(localStorage.getItem('jwt'));
  }
}
