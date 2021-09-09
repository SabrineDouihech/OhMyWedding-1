import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import debounce from 'lodash.debounce';

@Component({
  selector: 'app-admin-packageslist',
  templateUrl: './admin-packageslist.component.html',
  styleUrls: ['./admin-packageslist.component.css'],
})
export class AdminPackageslistComponent implements OnInit {
  query = '';
  items: any[] = [];
  categories = ['food', 'band', 'host', 'clothes', 'cars', 'invitationCard'];
  selectedCategory = 'food';
  isChecked: boolean = false;
  packageQuery: string = '';
  selected: string = '----';
  packages: string[] = ['7out', 'mo9li', 'felfel 7ar'];
  filteredPackages: string[] = this.packages.filter((pack) =>
    pack.includes(this.packageQuery)
  );

  constructor(private packagesService: PackagesService) {}
  ngOnInit(): void {
    console.log(this.filteredPackages);
  }
  search() {
    console.log('searching');
    this.packagesService
      .searchByCategory(this.query, this.selectedCategory)
      .subscribe((data) => (this.items = data));
  }
  debouncedSearch = debounce(this.search, 500);

  update(e: any) {
    this.selected = e.target.value;
  }
}
