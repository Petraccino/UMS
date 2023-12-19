import { User } from './classes/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  viewForm: boolean = false;
  userSelected: User = new User();
  ngOnInit(): void {
  }
  updateUser(user: User): void {
    this.viewForm = true;
    this.userSelected = user;
  }
  newUser(): void {
    this.userSelected = new User();
    this.viewForm = true;
  }
}
