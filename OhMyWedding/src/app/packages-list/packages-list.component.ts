import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  constructor(private ps : PackagesService, private router: Router) { }
data : any = [];
packages: any =[];
  ngOnInit(): void {
  }

  getAPackage (){
    this.ps.getPackages().subscribe((data)=>{
      this.packages = data
    }) 
}
details(){
  this.router.navigateByUrl('/details')
}
categoriesList(){
  this.router.navigateByUrl('/categorieslist')
}

}
