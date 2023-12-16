import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-users',
  providers: [],
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  outputs: [
    'updateUser'
  ]
})
export class UsersComponent implements OnInit{
  title = 'Users';
  public users: User[] = [];
  updateUser = new EventEmitter();
  constructor(private service: UserService) {
    this.users = service.getUsers();
  }
  ngOnInit(): void {
  }
  onDeletedUser(user: User): void{
    this.service.deleteUser(user);
  }
  onSelectedUser(user: User): void{
    this.updateUser.emit(user);
  }
}
