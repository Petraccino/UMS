import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  outputs: [
    'OnNewUser'
  ]
})
export class NavComponent implements OnInit{
  OnNewUser = new EventEmitter();
  ngOnInit(): void {
  }
  constructor() {}
  newUser(): void {
    this.OnNewUser.emit();
  }
}
