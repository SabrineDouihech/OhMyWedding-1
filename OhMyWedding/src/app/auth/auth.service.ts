import { Injectable } from '@angular/core';
import { SignUpInfo } from './sign-up-info';
import { SignInInfo } from './sign-in-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../auth/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signinUrl = 'http://localhost:3000/api/auth/signin';
  private signupUrl = 'http://localhost:3000/api/test/user/auth/signup';

  constructor(private http: HttpClient) {}

  attemptAuth(credentials: SignInInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      this.signinUrl,
      credentials,
      httpOptions
    );
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
