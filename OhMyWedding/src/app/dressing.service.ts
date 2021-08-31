import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DressingService {

  constructor(private http: HttpClient) { }

  getDressing() {
    return this.http.get('http://localhost:3000/api/dressing');
  }
}