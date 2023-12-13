import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  inputs: ['user'],
})
export class UserComponent implements OnInit {
  user: any;
  constructor() {}
  ngOnInit(): void {}
  deleteUser(): void {
    alert(this.user.name);
  }
}
