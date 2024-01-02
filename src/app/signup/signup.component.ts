import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupForm: FormGroup;
constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
  this.signupForm = formBuilder.group({
    usurname: [
      '', [
        Validators.required,
        Validators.min(4)
      ]
    ],
    email: [
      '', [
      Validators.required,
      Validators.email
      ]
    ],
    password: [
      '', [
        Validators.required,
        Validators.min(4)
      ]
    ]
  }, {
    updateOn: 'submit'
  });
}
signUp() {
  if(this.signupForm.valid) {
    const { usurname, email, password} = this.signupForm.value;
    this.auth.signUp(usurname, email, password);
    this.router.navigateByUrl('');
  }
}

}
