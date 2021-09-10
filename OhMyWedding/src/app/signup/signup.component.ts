import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/sign-up-info';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo = {
    username: '',
    password: '',
    email: '',
    phoneNumber: 0,
    roles: [],
  };
  isSignedUp: boolean = false;
  isSignedUpFailed: boolean = false;
  errorMessage: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signupInfo = {
      username: this.form.username,
      email: this.form.email,
      password: this.form.password,
      phoneNumber: this.form.phoneNumber,
      roles: ['user'],
    };
    console.log(this.signupInfo);
    this.authService.signUp(this.signupInfo).subscribe(
      (data) => {
        this.isSignedUp = true;
        this.isSignedUpFailed = false;
      },
      (error) => {
        console.log('error', error);
        this.errorMessage = error.error.message;
        this.isSignedUpFailed = true;
        //this.router.navigateByUrl('/packages');
      }
    );
  }
}
