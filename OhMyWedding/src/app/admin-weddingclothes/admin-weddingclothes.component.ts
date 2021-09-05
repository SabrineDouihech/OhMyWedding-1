import { Component, OnInit } from '@angular/core';
import { DressingService } from "../dressing.service";
@Component({
  selector: 'app-admin-weddingclothes',
  templateUrl: './admin-weddingclothes.component.html',
  styleUrls: ['./admin-weddingclothes.component.css']
})
export class AdminWeddingclothesComponent implements OnInit {

  constructor(private ds: DressingService) { }
  myData: any = [];
  Clotheses: any = [];
  title : any = "New Clo/Dres"
  dress :any = ""
  dressAddUpdate : any
  image : any 
  ngOnInit(): void {
    this.getDress()
  }
  getDress() {
    this.ds.getDressing().subscribe((myData) => {
      
      this.Clotheses = myData
      console.log(this.Clotheses[0].availabledate.split('T')[0]);
    })
  }

   insertADress(myData:any =[]) {
    this.ds.postDressing(myData).subscribe((data) => {
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
    this.ds.uploadImg(formData).subscribe((resp:any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.image = resp["msg"].url;
    });
  }
  deleteADress(id:string) {
    this.ds.deleteDressing(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
   
  updatesateDress(id:string,daty:any){
    this.ds.uptDressing(id,daty).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  openAdd(){
    this.image = ""
    this.title = "New Clo/Dres"
    this.dress = {}
    this.dressAddUpdate = true
   }

   openUpdate(dress : any){
    this.image = ""
    this.title = "Update Clo/Dres"
    this.dress = dress 
   this.dressAddUpdate = false
  }

}
