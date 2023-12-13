import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  providers: [],
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent {
  title = 'Users';
  public users: any[] = [];
  constructor(private service: UserService) {
    this.users = service.getUsers();
  }
  onDeletedUser(user: any): void{
    this.service.deleteUser(user);
  }
}
