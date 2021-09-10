import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InvitationCardsService {
  constructor(private http: HttpClient) {}

  getSomeInvitationCards() {
    return this.http.get<any[]>('http://localhost:3000/api/invitationcards');
  }

  postCards(data: any) {
    return this.http.post('http://localhost:3000/api/invitationcards', data);
  }
  deleteCards(id: string) {
    return this.http.delete(`http://localhost:3000/api/invitationcards/${id}`);
  }

  uptCards(id: string, data: any) {
    return this.http.put(
      `http://localhost:3000/api/invitationcards/${id}`,
      data
    );
  }
  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }
}
