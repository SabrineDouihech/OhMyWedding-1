import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  categorieslist() {
    this.router.navigateByUrl('/categorieslist');
  }

  packageslist() {
    this.router.navigateByUrl('/packageslist');
    console.log('one');
  }
}
