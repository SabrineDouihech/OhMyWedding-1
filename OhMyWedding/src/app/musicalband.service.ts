import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicalbandService {
  constructor(private http: HttpClient) {}
  getABand() {
    return this.http.get<any[]>('http://localhost:3000/api/musicalband');
  }
  postABand(data: any) {
    return this.http.post('http://localhost:3000/api/musicalband', data);
  }
  deleteABand(id: string) {
    return this.http.delete(`http://localhost:3000/api/musicalband/${id}`);
  }

  uptABand(id: string, data: any) {
    return this.http.put(`http://localhost:3000/api/musicalband/${id}`, data);
  }
  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }
}
