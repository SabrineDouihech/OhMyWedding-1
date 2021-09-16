import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  // total: number = 0;
  rest: number = 0;
  aarboun: number = 0;
  // price: number[] = [3000, 3000, 4000];

  favorites: any = [];
  total: number = 0;
  selectedValue: string = '';
  constructor(
    private confirmation: FavoritesService,
    private confirmationService: ConfirmationService
  ) {
    this.favorites = JSON.parse(localStorage.getItem('items') || '[]');
  }

  ngOnInit(): void {
    this.favorites = this.confirmation.myFav;
    console.log(this.favorites);
  }

  paimentCalculate() {
    for (var i = 0; i < this.favorites.length; i++) {
      this.total += this.favorites[i].item.price;
      console.log(this.favorites[i].item.price);
    }
    this.aarboun += (this.total * parseInt(this.selectedValue)) / 100;
    this.rest = this.total - this.aarboun;
  }

  payNow(data: any) {
    this.confirmationService.paiment(data).subscribe((url: any) => {
      window.location.replace(url);
      console.log(url);
    });
  }

  syncItems() {
    this.favorites.setItem('items', JSON.stringify(this.favorites));
  }

  // PaimentCalculate() {
  //   for (var i = 0; i < this.price.length; i++) {
  //     this.total += this.price[i];
  //   }

  //   this.aarboun += (this.total * parseInt(this.selectedValue)) / 100;
  //   this.rest = this.total - this.aarboun;
  // }
}
