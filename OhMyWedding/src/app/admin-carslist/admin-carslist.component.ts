import { Component, OnInit } from '@angular/core';  
import { LuxuryCarsSercice } from "../cars.service";

@Component({
  selector: 'app-admin-carslist',
  templateUrl: './admin-carslist.component.html',
  styleUrls: ['./admin-carslist.component.css']
})
export class AdminCarslistComponent implements OnInit {

  constructor(private cs: LuxuryCarsSercice) { }
  myData: any = [];
  Cars: any = [];
  title : any = "New Car"
  car :any = ""
  carAddUpdate : any 
  ngOnInit(): void {
    this.getCars()
  }

  
  
  getCars() {
    this.cs.getCars().subscribe((myData) => {
      this.Cars = myData
      console.log("dzzadzdazda", this.Cars);

    })
  }
  insertACar(myData:any =[]) {
    this.cs.postCars(myData).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  deleteACar(id:string) {
    this.cs.deleteCars(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  upsatecar(id:string,daty:any){
    this.cs.uptCars(id,daty).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }

  openAdd(){
   this.title = "New Car"
   this.car = {}
   this.carAddUpdate = true
  }
  openUpdate(car : any){
    this.title = "Update Car"
    this.car = car 
   this.carAddUpdate = false

  }


}


