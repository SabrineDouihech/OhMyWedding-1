import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { SignInInfo } from '../auth/sign-in-info';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  form: any = {};
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  loginInfo: SignInInfo = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  user: any;

  ngOnInit(): void {}

  onSubmit() {
    this.loginInfo = {
      username: this.form.username,
      password: this.form.password,
    };
    this.authService.attemptAuth(this.loginInfo).subscribe(
      (data: any) => {
        console.log('logininfo', this.loginInfo);
        console.log('data', data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        console.log('my data', data.authorities);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigateByUrl('/packages');
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }
}
