import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private http: HttpClient) {}
  paiment(data: any) {
    return this.http.post('http://localhost:3000/paiment', data);
  }
}
