import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getSomeFood() {
    return this.http.get('http://localhost:3000/api/food/foodi');
  }
  postSomeFood(data: any) {
    return this.http.post('http://localhost:3000/api/food', data);
  }
  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }
  deleteFood(id: string) {
    return this.http.delete(`http://localhost:3000/api/food/${id}`);
  }

  updateFood(id: string, data: any) {
    return this.http.put(`http://localhost:3000/api/food/${id}`, data);
  }
}
