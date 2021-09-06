import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  selectedItem: any = {};
  constructor(private http: HttpClient) {}

  // getoneCar(id: any) {
  //   return this.http.get(`http://localhost:3000/api/details/${id}`);
  // }
}
