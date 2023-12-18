import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  inputs: ['user'],
})
export class UserDetailsComponent implements OnInit {
  private userCopy: User;
  private __user: User;
  set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user(){
    return this.__user;
  }
  constructor(private service: UserService) {
    this.__user = new User();
    this.userCopy = new User();
  }
  ngOnInit(): void {}
  saveUser(): void {
    if (this.user.id > 0) {
      this.service.updateUser(this.user);
    } else {
      this.service.createUser(this.user);
    }
  }

  resetForm(form: NgForm): void{
    if(this.user.id === 0){
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
