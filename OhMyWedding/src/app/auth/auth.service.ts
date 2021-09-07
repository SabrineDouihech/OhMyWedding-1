import { Injectable } from '@angular/core';
import { SignUpInfo } from './sign-up-info';
import { SignInInfo } from './sign-in-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signinUrl = 'http://localhost:3000/api/auth/signin';
  private signupUrl = 'http://localhost:3000/api/test/user/auth/signup';

  constructor(@Inject(String) private http: HttpClient) {}

  attemptAuth(credentials: SignInInfo) {
    return this.http.post(this.signinUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo) {
    return this.http.post(this.signupUrl, info, httpOptions);
  }
}
