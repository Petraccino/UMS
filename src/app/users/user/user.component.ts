import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  inputs: ['user'],
  outputs: [
    'onDeletedUser',
    'onSelectedUser'
  ],
})
export class UserComponent implements OnInit {
  user: User = new User();
  onDeletedUser = new EventEmitter();
  onSelectedUser = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  deleteUser(): void {
    this.onDeletedUser.emit(this.user);
  }
  updateUser(): void {
    this.onSelectedUser.emit(this.user);
  }
}
