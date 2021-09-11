import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  constructor(private router: Router) {}

  title = 'rating-app';
  public rating1: any;
  public rating2: any;

  ngOnInit(): void {
    this.rating1 = 0;
    this.rating2 = 0;
  }

  categorieslist() {
    this.router.navigateByUrl('/categorieslist');
  }

  packageslist() {
    this.router.navigateByUrl('/packageslist');
  }

  foodlist() {
    this.router.navigateByUrl('/food');
  }

  carsList() {
    this.router.navigateByUrl('/carslist');
  }

  hosts() {
    this.router.navigateByUrl('/hosts');
  }

  submitForm(form: NgForm) {
    form.resetForm();
    this.rating1 = 0;
    this.rating2 = 0;
  }
}
