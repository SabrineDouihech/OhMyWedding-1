import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FavoritesService} from '../favorites.service'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
 favourites: any =[];
  constructor(private fs: FavoritesService, private router: Router) { }

  ngOnInit(): void {
    this.getAfavorite()
  }

  getAfavorite (){
    this.fs.getFavorites().subscribe((data)=>{
      this.favourites = data
    }) 
}
 
// addAFavorite(type: string; userId: number; itemId: number){
//   this.fs.addtofavorites({type: type, userId: userId, itemId: itemId)}).subscribe((data)=>{
//     console.log(data);
//   })
// }

}
