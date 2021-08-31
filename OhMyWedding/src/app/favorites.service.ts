import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorites() {
    return this.http.get(`http://localhost:3000/api/favorites/${1}`); // TODO: add the current user id to this request
  }

  addtofavorites(data: { type: string; userId: number; itemId: number }) {
    return this.http.post('http://localhost:3000/api/favorites', data);
  }

  // addtofavorites(id: any, data: any) {
  //     return this.http.put('http://localhost:3000/api/addtofavorites' + id, data);
  //     }
}
