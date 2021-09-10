import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private roles: any = [];
  authority: string = '';
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  ngOnInit(): void {}

  logIn() {
    this.router.navigateByUrl('/Log-in');
  }
  signup() {
    this.router.navigateByUrl('/Sign-Up');
  }
  homePage() {
    this.router.navigateByUrl('');
  }
  aboutUsHome() {
    this.router.navigateByUrl('/aboutus');
  }

  vrifyAuthority() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every((role: string) => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
