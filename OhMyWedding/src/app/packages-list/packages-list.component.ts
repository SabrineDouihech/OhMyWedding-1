import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css'],
})
export class PackagesListComponent implements OnInit {
  constructor(
    private packagesService: PackagesService,
    private favoritesService: FavoritesService,
    private detailsService: DetailsService,
    private router: Router
  ) {}

  data: any = [];
  packages: any = [];
  carpackage: any = [];
  price: any;
  safeprice: any;
  safepackage: any = [];
  ngOnInit(): void {
    this.getAPackage();
    // this.getAPackagecar();
  }

  getAPackage() {
    this.packagesService.getPackages().subscribe((data) => {
      console.log(data);
      this.packages = data;
      this.safeprice = data;
    });
  }

  // getAPackagecar() {
  //   this.packagesService.getoneCar().subscribe((data) => {
  //     this.carpackage = data;
  //   });
  // }
  // addAFavorite(data: any){
  //   this.fs.addtofavorites(this.package).subscribe(data)

  //  }

  // addAFavorite(type: string; userId: number; itemId: number){
  //   this.packagesService.addtofavorites({name: name,image: image,price: parseInt(price),persons: parseInt(persons)}).subscribe((data:any)=>{
  //     console.log(data);
  //   })
  // }

  // details() {
  //   this.router.navigateByUrl('/details');
  // }

  categoriesList() {
    this.router.navigateByUrl('/categorieslist');
  }

  hostPrice() {
    var mock = [];
    for (var i = 0; i < this.packages.length; i++) {
      if (
        this.packages[i].price === this.price * 1 ||
        this.packages[i].price < this.price * 1
      ) {
        mock.push(this.packages[i]);
      }
    }
    this.packages = mock;
  }

  searchforAPackage() {
    this.packages = this.safepackage;
    if (this.price) {
      this.hostPrice();
    }
  }

  previousPage() {
    this.router.navigateByUrl('/packages');
  }

  showDetails(element: any) {
    this.detailsService.selectedItem = element;
    this.router.navigateByUrl('/details');
  }
}
