import { Component, OnInit } from '@angular/core';
import { FoodService } from "../food.service";
@Component({
  selector: 'app-admin-foodlist',
  templateUrl: './admin-foodlist.component.html',
  styleUrls: ['./admin-foodlist.component.scss']
})
export class AdminFoodlistComponent implements OnInit {
  mYdata: any = [];
  Foods: any = [];
  constructor( private fs:FoodService) { }
  title : any = "New Food"
  food :any = ""
  foodAddUpdate : any
  image : any
  ngOnInit(): void {
    this.getFoods()
  }


  getFoods() {
    this.fs.getSomeFood().subscribe((myData) => {
      this.Foods = myData
      console.log("dzzadzdazda", this.Foods);

    })
  }
  insertAFood(myData:any =[]) {
    this.fs.postSomeFood(myData).subscribe((data) => {
      alert('Yumyyy We Have new Food');
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
  this.fs.uploadImg(formData).subscribe((resp:any) => {
    // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
    console.log("RESP====> ", resp["msg"].url);
    this.image = resp["msg"].url;
  });
}
deleteAFood(id:string) {
  this.fs.deleteFood(id).subscribe((data) => {
    alert('done');
    this.ngOnInit();
  });
}
upsatefood(id:string,daty:any){
  this.fs.updateFood(id,daty).subscribe((data) => {
    alert('done');
    this.ngOnInit();
  });
}
openAdd(){
 this.image = ""
 this.title = "New Food"
 this.food = {}
 this.foodAddUpdate = true
}
openUpdate(food : any){
  this.image = ""
  this.title = "Update Food"
  this.food = food 
 this.foodAddUpdate = false

}

}
