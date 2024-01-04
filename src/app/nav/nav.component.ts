import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  outputs: ['OnNewUser'],
})
export class NavComponent implements OnInit {
  OnNewUser = new EventEmitter();
  public isLoggedIn$: Observable< User | null>;
  ngOnInit(): void {}
  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn$ = auth.isLoggedIn$;
  }
  newUser(): void {
    this.OnNewUser.emit();
  }
  logout() {
    this.auth.logOut();
    this.router.navigateByUrl('/signup');
  }
  signUp() {
    this.router.navigateByUrl('/signup');
  }
  login() {
    this.router.navigateByUrl('/login');
  }
}
