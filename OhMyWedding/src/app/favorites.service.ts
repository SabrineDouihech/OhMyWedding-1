import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  addToFavorites(data: any) {
     return this.http.post('http://localhost:3000/api/addtofavorites', data);
    }
  
}
