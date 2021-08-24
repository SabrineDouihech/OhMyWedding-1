import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {}
       SelectAll (){
    return this.http.get('http://localhost:3000/api/user');
  }
       CreateUser (data:any){
         return this.http.post('http://localhost:3000/api/user/signUp',data);
       }
}
