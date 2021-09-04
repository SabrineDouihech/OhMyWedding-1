import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  data: any = [];
  food: any = [];

  foodtype: string = '';
  price: any;
  safefood: any;
  safeprice: any;

  constructor(
    private foodService: FoodService,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this.foodService.getSomeFood().subscribe((data) => {
      this.food = data;
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
    this.food = this.food.filter((response: any) => {
      return response.price === parseInt(this.price);
    });
  }

  showDetails(element: any) {
    this.detailsService.selectedItem = element;
    this.router.navigateByUrl('/details');
  }
  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }
}
