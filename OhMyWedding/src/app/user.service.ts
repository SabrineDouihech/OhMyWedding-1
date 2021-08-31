import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any = '';
  constructor(private http: HttpClient) {}
  SelectAll() {
    return this.http.get('http://localhost:3000/api/user');
  }
  CreateUser(data: any) {
    console.log('data===>', data);

    return this.http.post('http://localhost:3000/api/user/signUp', data);
  }

  UserLogin(result: any) {
    return this.http.post('http://localhost:3000/api/user/logIn', result);
  }
}
