import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { DetailsService } from '../details.service';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  data: any = [];
  food: any = [];

  foodtype: string = '';
  price: any;
  safefood: any;
  safeprice: any;

  itemId: any;
  type: any;
  constructor(
    private foodService: FoodService,
    private router: Router,
    private detailsService: DetailsService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this.foodService.getSomeFood().subscribe((data) => {
      this.food = data;
      //console.log('***********', data);
      this.safefood = data;
      this.safeprice = data;
    });
  }

  search() {
    this.food = this.safefood;
    if (this.foodtype && this.price) {
      this.foodType();
      this.foodPrice();
    } else if (!this.foodtype && this.price) {
      this.foodPrice();
    } else if (this.foodtype && !this.price) {
      this.foodType();
    } else if (!this.foodtype && !this.price) {
      this.food = this.safefood;
    }
  }

  foodType() {
    this.food = this.food.filter((response: any) => {
      return response.foodtype
        .toLocaleLowerCase()
        .match(this.foodtype.toLocaleLowerCase());
    });
  }

  foodPrice() {
    var mock = [];
    for (var i = 0; i < this.food.length; i++) {
      if (
        this.food[i].price === this.price * 1 ||
        this.food[i].price < this.price * 1
      ) {
        mock.push(this.food[i]);
      }
    }
    this.food = mock;
  }

  searchforAFood() {
    this.food = this.safefood;
    if (this.price) {
      this.foodPrice();
    }
  }

  showDetails(element: any) {
    this.detailsService.selectedItem = { element, type: 'food' };
    this.router.navigateByUrl('/details');
  }

  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }

  addAfavoriteHost(itemId: number) {
    console.log('message food', itemId);
    this.favoritesService
      .addtofavorites({ type: 'food', itemId })
      .subscribe((data) => {
        console.log('getting test', data);
      });
  }
}
