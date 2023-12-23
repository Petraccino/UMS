import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../service/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  inputs: ['user'],
})
export class UserDetailsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  faList = faList;
  faSlash = faSlash;
  faFloppyDisk = faFloppyDisk;
  private userCopy: User;
  private __user: User;
  set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this.__user;
  }
  constructor(
    private service: UserService,
    private activatedRuote: ActivatedRoute,
    private router: Router
  ) {
    this.__user = new User();
    this.userCopy = new User();
  }
  ngOnInit(): void {
    this.activatedRuote.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.service
          .getUser(Number(params.get('id')))
          .subscribe((user) => (this.user = user));
      }
    });
  }
  saveUser(): void {
    let obj;
    if (this.user.id > 0) {
      obj = this.service.updateUser(this.user);
    } else {
      obj = this.service.createUser(this.user);
    }
    if (this.form.valid){
      obj.subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }
  }

  resetForm(form: NgForm): void {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
  listUsers(): void {
    this.router.navigateByUrl('');
  }
}
