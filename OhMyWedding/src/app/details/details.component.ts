import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: any = {};

  constructor(
    private detailsService: DetailsService,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.item = this.detailsService.selectedItem;
    console.log(this.item);
  }

  addAfavoriteDetails(itemId: number, type: string) {
    this.favoritesService
      .addtofavorites({ itemId, type })
      .subscribe((data) => {});
  }
}
