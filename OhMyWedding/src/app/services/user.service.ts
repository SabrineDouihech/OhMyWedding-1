import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:3000/api/test/user';
  private adminUrl = 'http://localhost:3000/api/test/admin';
  private pmUrl = 'http://localhost:3000/api/test/pm';
  constructor(private http: HttpClient) {}

  user: string = '';

  getUserBoard() {
    return this.http.get(this.userUrl);
  }
  getPMBoard() {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }
  getAdminBoard() {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
