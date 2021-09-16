import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  selectedItem: any = {};
  constructor(private http: HttpClient) {}

  // getOneFood(id: any) {
  //   return this.http.get(`http://localhost:3000/api/food/${id}`);
  // }
  // getOneCar(id: any) {
  //   return this.http.get(`http://localhost:3000/api/cars/${id}`);
  // }
  // getOneCadInvitation(id: any) {
  //   return this.http.get(`http://localhost:3000/api/invitationcards/${id}`);
  // }
  // getOneHost(id: any) {
  //   return this.http.get(`http://localhost:3000/api/hosts/${id}`);
  // }
  // getOneDressing(id: any) {
  //   return this.http.get(`http://localhost:3000/api/dressing/${id}`);
  // }
  // getOneMusicalBand(id: any) {
  //   return this.http.get(`http://localhost:3000/api/musicalband/${id}`);
  // }
}
