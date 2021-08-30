import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicalbandService {

  constructor(private http: HttpClient) { }
  getABand() {
    return this.http.get('http://localhost:3000/api/musicalband');
  }
}

