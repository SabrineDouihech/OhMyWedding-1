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
  image : any 
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
      alert('You Have New Car');
      this.ngOnInit();
    });

  }
  imgUpload(img:any) {
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append("img", img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.cs.uploadImg(formData).subscribe((resp:any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.image = resp["msg"].url;
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
   this.image = ""
   this.title = "New Car"
   this.car = {}
   this.carAddUpdate = true
  }
  openUpdate(car : any){
    this.image = ""
    this.title = "Update Car"
    this.car = car 
   this.carAddUpdate = false

  }


}


