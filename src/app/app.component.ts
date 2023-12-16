import { User } from './interface/user.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userSelected: User | undefined;
  updateUser(user: User): void {
    this.userSelected = user;
  }
}
