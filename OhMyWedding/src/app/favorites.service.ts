import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorites(userid: number) {
    return this.http.get(`http://localhost:3000/api/favorites/${userid}`); // TODO: add the current user id to this request
  }

  addtofavorites(data: { type: string; userId: number; itemId: number }) {
    return this.http.post('http://localhost:3000/api/favorites', data);
  }

  deleteAFavorite(id: number) {
    return this.http.delete(`http://localhost:3000/api/favorites/${id}`);
  }
}
