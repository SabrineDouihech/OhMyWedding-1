import { Component, OnInit } from '@angular/core';
import { MusicalbandService } from "../musicalband.service";
@Component({
  selector: 'app-admin-musicalbandlist',
  templateUrl: './admin-musicalbandlist.component.html',
  styleUrls: ['./admin-musicalbandlist.component.css']
})
export class AdminMusicalbandlistComponent implements OnInit {
  
  constructor(private ms: MusicalbandService) { }
  myData: any = [];
  Bandes: any = [];
  title : any = "New Band"
  band :any = ""
  bandAddUpdate : any
  image : any 
  
  ngOnInit(): void {
    this.getBands()
  }


  getBands() {
    this.ms.getABand().subscribe((myData) => {
      this.Bandes = myData
    })
  }
  insertABand(myData:any =[]) {
    this.ms.postABand(myData).subscribe((data) => {
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
    this.ms.uploadImg(formData).subscribe((resp:any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.image = resp["msg"].url;
    });
  }
  deleteABand(id:string) {
    this.ms.deleteABand(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }

  updatesateBand(id:string,daty:any){
    this.ms.uptABand(id,daty).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  openAdd(){
    this.image = ""
    this.title = "New Car"
    this.band = {}
    this.bandAddUpdate = true
   }

   openUpdate(band : any){
    this.image = ""
    this.title = "Update Car"
    this.band = band 
   this.bandAddUpdate = false
  }


}
