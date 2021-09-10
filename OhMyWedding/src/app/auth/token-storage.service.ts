import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor() {}

  signOut() {
    sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUsername(username: string) {
    sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): any {
    return sessionStorage.getItem(USERNAME_KEY);
  }
  public saveAuthorities(authorities: string[]) {
    sessionStorage.removeItem(AUTHORITIES_KEY);
    console.log('auth saved', JSON.stringify(authorities));
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '').forEach(
        (authority: any) => {
          this.roles.push(authority);
        }
      );
    }
    return this.roles;
  }
}
