import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favourites: any = [];
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getAfavorite();
  }

  getAfavorite() {
    this.favoritesService.getFavorites(1).subscribe((data) => {
      this.favourites = data;
    });
  }

  addAFavorite(type: string, userId: number, itemId: number) {
    this.favoritesService
      .addtofavorites({ type, userId, itemId })
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteAfavorite(id: number) {
    this.favoritesService.deleteAFavorite(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
}
