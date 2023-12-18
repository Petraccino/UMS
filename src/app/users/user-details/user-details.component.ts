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
  user: User = new User();
  constructor(private service: UserService) {}
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
      form.reset();
    }
  }
}
