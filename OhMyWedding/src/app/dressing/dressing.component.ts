import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DressingService } from '../dressing.service';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css'],
})
export class DressingComponent implements OnInit {
  data: any = [];
  clothes: any = [];

  genre: string = '';
  price: any;
  safeclothes: any;
  safeprice: any;
  constructor(
    private dressingService: DressingService,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getWeddingDressing();
  }

  getWeddingDressing() {
    this.dressingService.getDressing().subscribe((data) => {
      this.clothes = data;
      this.safeclothes = data;
      this.safeprice = data;
    });
  }
  showDetails(element: any) {
    this.detailsService.selectedItem = element;
    this.router.navigateByUrl('/details');
  }

  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }

  search() {
    this.clothes = this.safeclothes;
    if (this.genre && this.price) {
      this.clothesGenre();
      this.clothesPrice();
    } else if (!this.genre && this.price) {
      this.clothesPrice();
    } else if (this.genre && !this.price) {
      this.clothesGenre();
    } else if (!this.genre && !this.price) {
      this.clothes = this.safeclothes;
    }
  }

  clothesGenre() {
    var mock = [];
    for (var i = 0; i < this.clothes.length; i++) {
      if (
        this.clothes[i].genre.toLocaleLowerCase() ===
        this.genre.toLocaleLowerCase()
      ) {
        mock.push(this.clothes[i]);
      }
    }
    this.clothes = mock;
  }

  clothesPrice() {
    var mock = [];
    for (var i = 0; i < this.clothes.length; i++) {
      if (this.clothes[i].price === this.price * 1) {
        mock.push(this.clothes[i]);
      }
    }
    this.clothes = mock;
  }
}
