import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
@Component({
  selector: 'app-admin-list-of-packages',
  templateUrl: './admin-list-of-packages.component.html',
  styleUrls: ['./admin-list-of-packages.component.css'],
})
export class AdminListOfPackagesComponent implements OnInit {
  constructor(private packagesService: PackagesService) {}
  myData: any = [];
  Packs: any = [];
  title: any = 'New Package';
  pack: any = '';
  packAddUpdate: any;
  image: any;
  ngOnInit(): void {
    this.getPacks();
  }

  getPacks() {
    this.packagesService.getPackages().subscribe((myData) => {
      this.Packs = myData;
      console.log(this.Packs);
    });
  }
  insertAPack(myData: any = []) {
    this.packagesService.postPackages(myData).subscribe((data) => {
      alert('You Have New Pack');
      this.ngOnInit();
    });
  }
  imgUpload(img: any) {
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append('img', img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.packagesService.uploadImg(formData).subscribe((resp: any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log('RESP====> ', resp['msg'].url);
      this.image = resp['msg'].url;
    });
  }
  deleteACar(id: string) {
    this.packagesService.deleteAPackage(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  openAdd() {
    this.image = '';
    this.title = 'New Package';
    this.pack = {};
    this.packAddUpdate = true;
  }
  // openUpdate(car: any) {
  //   this.image = '';
  //   this.title = 'Update Pac';
  //   this.pack = car;
  //   this.packAddUpdate = false;
  // }
}
