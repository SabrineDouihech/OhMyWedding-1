import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Router } from '@angular/router';
import {FavoritesService} from '../favorites.service'

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  constructor(private packagesService : PackagesService, private favoritesService: FavoritesService, private router: Router) { }

data : any = [];
packages: any =[];
// package : any =[];
price: any;
safeprice: any;

  ngOnInit(): void {
    this.getAPackage ()
  }

getAPackage (){
    this.packagesService.getPackages().subscribe((data)=>{
    console.log(data)
      this.packages = data
      this.safeprice = data;
    }) 
}

// addAFavorite(data: any){
//   this.fs.addtofavorites(this.package).subscribe(data)

//  }

// addAFavorite(type: string; userId: number; itemId: number){
//   this.packagesService.addtofavorites({name: name,image: image,price: parseInt(price),persons: parseInt(persons)}).subscribe((data:any)=>{
//     console.log(data);
//   })
// }

details(){
  this.router.navigateByUrl('/details')
}

categoriesList(){
  this.router.navigateByUrl('/categorieslist')
}

search() {
  console.log(this.price, this.packages)
  this.packages = this.safeprice 
    this.packages = this.packages.filter((response: any) => {
      return response.price === parseInt(this.price)
    });

}

previousPage(){
  this.router.navigateByUrl('/packages')
}

}
