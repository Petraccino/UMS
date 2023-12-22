import { Component, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  outputs: ['OnNewUser'],
})
export class NavComponent implements OnInit {
  OnNewUser = new EventEmitter();
  ngOnInit(): void {}
  constructor(private renderer: Renderer2) {}
  newUser(): void {
    this.OnNewUser.emit();
  }
}
