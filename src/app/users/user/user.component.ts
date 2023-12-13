import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  inputs: ['user'],
  outputs: ['onDeletedUser'],
})
export class UserComponent implements OnInit {
  user: any;
  onDeletedUser = new EventEmitter();
  constructor(private service: UserService) {}
  ngOnInit(): void {}
  deleteUser(): void {
    this.onDeletedUser.emit(this.user);
  }
}
