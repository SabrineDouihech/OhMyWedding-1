import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorites() {
    return this.http.get<any[]>('http://localhost:3000/api/favorites');
  }

  addtofavorites(data: any) {
    console.log('inside fav service', data);
    return this.http.post('http://localhost:3000/api/favorites', data);
  }

  deleteAFavorite(id: number) {
    return this.http.delete(`http://localhost:3000/api/favorites/${id}`);
  }
}
