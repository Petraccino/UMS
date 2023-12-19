import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
  faWrench = faWrench;
  faTrash = faTrash;
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
