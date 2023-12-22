import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../service/user.service';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent implements OnInit {
  user: User = new User();
  faList = faList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UserService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.service
        .getUser(Number(params.get('id')))
        .subscribe((user) => (this.user = user));
    });
  }
  listUsers(): void {
    this.route.navigateByUrl('');
  }
}
