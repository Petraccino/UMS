import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  providers: [],
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  outputs: ['updateUser'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  public users$: Observable<User[]> = this.service.getUsers();
  updateUser = new EventEmitter();
  constructor(private service: UserService) {
  }
  ngOnInit(): void {}
  onDeletedUser(user: User): void {
    this.service.deleteUser(user).subscribe ( () => {
      location.reload();
    })
  }
  onSelectedUser(user: User): void {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
