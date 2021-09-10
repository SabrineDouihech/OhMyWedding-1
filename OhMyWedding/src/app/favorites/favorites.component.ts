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
  favourites: any[] = [];
  myFav: any = {};

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAfavorite();
    this.myFav = this.favoritesService.myFav;
  }

  getAfavorite() {
    this.favoritesService.getFavorites().subscribe((data) => {
      this.favourites = data;
    });
  }

  addAFavorite(type: string, itemId: number) {
    this.favoritesService
      .addtofavorites({ type, itemId })
      .subscribe((data) => {});
  }

  deleteAfavorite(id: number) {
    this.favoritesService.deleteAFavorite(id).subscribe((data) => {
      this.favourites = this.favourites.filter((fav) => fav.id !== id);
    });
  }

  // passFav() {
  //   this.favourites = this.myFav;
  // }

  reserveNow() {
    this.favoritesService.myFav = this.favourites;
    this.router.navigateByUrl('/confirm');
  }
}
