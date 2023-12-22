import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  inputs: ['user'],
  outputs: ['onDeletedUser', 'onSelectedUser'],
})
export class UserComponent implements OnInit {
  faWrench = faWrench;
  faTrash = faTrash;
  faInfo = faInfo;
  user: User = new User();
  onDeletedUser = new EventEmitter();
  onSelectedUser = new EventEmitter();
  constructor(private route: Router, private service: UserService) {}
  ngOnInit(): void {}
  deleteUser(): void {
    this.onDeletedUser.emit(this.user);
  }
  updateUser(): void {
    this.route.navigateByUrl('/users/' + this.user.id + '/edit');
    this.onSelectedUser.emit(this.user);
  }
  infoUser(): void {
    this.route.navigateByUrl('/users/' + this.user.id );
  }
}
