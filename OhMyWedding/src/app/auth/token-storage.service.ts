import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private roles: any = [];

  constructor() {}

  signOut() {
    sessionStorage.clear();
  }
  public saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUsername(username: string) {
    sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername() {
    return sessionStorage.getItem(USERNAME_KEY);
  }
  // public saveAuthorities(authorities: string[]) {
  //   sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  // }
  // public getAuthorities(): string[] {
  //   this.roles = [];
  //   if (sessionStorage.getItem(TOKEN_KEY)) {
  //     JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '').forEach(
  //       (authority: any) => {
  //         this.roles.push(authority.authority);
  //       }
  //     );
  //   }
  //   return this.roles;
  // }
}
