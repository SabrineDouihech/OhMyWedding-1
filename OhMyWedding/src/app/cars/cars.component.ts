import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LuxuryCarsSercice } from '../cars.service';
import { DetailsService } from '../details.service';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  data: any = [];
  cars: any = [];

  carbrand: string = '';
  price: any;
  safecars: any;
  safeprice: any;
  constructor(
    private luxurycarsSercice: LuxuryCarsSercice,
    private router: Router,
    private detailsService: DetailsService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.getLuxCars();
  }

  getLuxCars() {
    this.luxurycarsSercice.getCars().subscribe((data) => {
      this.cars = data;
      this.safecars = data;
      this.safeprice = data;
    });
  }
  showDetails(element: any) {
    this.detailsService.selectedItem = { element, type: 'luxurycars' };
    this.router.navigateByUrl('/details');
  }

  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }

  searchforACar() {
    this.cars = this.safecars;
    if (this.carbrand && this.price) {
      this.carBrand();
      this.carPrice();
    } else if (!this.carbrand && this.price) {
      this.carPrice();
    } else if (this.carbrand && !this.price) {
      this.carBrand();
    } else if (!this.carbrand && !this.price) {
      this.cars = this.safecars;
    }
  }

  carBrand() {
    var mock = [];
    for (var i = 0; i < this.cars.length; i++) {
      if (
        this.cars[i].brand.toLocaleLowerCase() ===
        this.carbrand.toLocaleLowerCase()
      ) {
        mock.push(this.cars[i]);
      }
    }
    this.cars = mock;
  }

  carPrice() {
    var mock = [];
    for (var i = 0; i < this.cars.length; i++) {
      if (
        this.cars[i].price === this.price * 1 ||
        this.cars[i].price < this.price * 1
      ) {
        mock.push(this.cars[i]);
      }
    }
    this.cars = mock;
  }

  searchfortheprice() {
    this.cars = this.safecars;
    if (this.price) {
      this.carPrice();
    }
  }

  addAfavoriteCar(itemId: number) {
    console.log('message cars', itemId);
    this.favoritesService
      .addtofavorites({ type: 'luxurycars', itemId })
      .subscribe((data) => {
        console.log('getting test', data);
      });
  }
}
