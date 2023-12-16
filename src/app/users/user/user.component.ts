import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../interface/user.interface';

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
  user: User | undefined;
  onDeletedUser = new EventEmitter();
  onSelectedUser = new EventEmitter();
  constructor(private service: UserService) {}
  ngOnInit(): void {}
  deleteUser(): void {
    this.onDeletedUser.emit(this.user);
  }
  updateUser(): void {
    this.onSelectedUser.emit(this.user);
  }
}
