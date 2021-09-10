import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  // total: number = 0;
  // rest: number = 0;
  // aarboun: number = 0;
  // price: number[] = [3000, 3000, 4000];
  selectedValue: string = '';
  favorites: any = [];
  constructor(private confirmation: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.confirmation.myFav;
    console.log(this.favorites);
  }

  // PaimentCalculate() {
  //   for (var i = 0; i < this.price.length; i++) {
  //     this.total += this.price[i];
  //   }

  //   this.aarboun += (this.total * parseInt(this.selectedValue)) / 100;
  //   this.rest = this.total - this.aarboun;
  // }
}
