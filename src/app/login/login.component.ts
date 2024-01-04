import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({});

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl()
      }
    )
  }

  login(): void{
    const {email, password} = this.loginForm.value;
    this.auth.signIn(email, password).subscribe (
      response => {
        if ( response ) {
          console.log(response, 'login');
          //this.router.navigateByUrl('');
        }
      }
    )
  }

}
