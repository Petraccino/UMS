import { User } from './classes/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  viewForm: boolean = false;
  userSelected: User = new User();
  updateUser(user: User): void {
    this.viewForm = true;
    this.userSelected = user;
  }
  newUser(): void {
    this.userSelected = new User();
    this.viewForm = true;
  }
}
