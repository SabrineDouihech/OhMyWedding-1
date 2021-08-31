import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http :HttpClient ) { }
  AdminLogin (data:any) {
    return this.http.post('http://localhost:3000/api/admin',data)
  }
}
