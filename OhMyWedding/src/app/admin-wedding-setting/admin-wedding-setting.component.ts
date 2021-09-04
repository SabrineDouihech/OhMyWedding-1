import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostsSercice } from "../hosts.service";
@Component({
  selector: 'app-admin-wedding-setting',
  templateUrl: './admin-wedding-setting.component.html',
  styleUrls: ['./admin-wedding-setting.component.css']
})
export class AdminWeddingSettingComponent implements OnInit {

  constructor(private hs: HostsSercice) { }
  mYdata: any = [];
  Hostes: any = [];
  title : any = "New Host"
  host :any = ""
  hostAddUpdate : any
  image : any
  ngOnInit(): void {
    this.getHostes()
  }


  getHostes() {
    this.hs.gethosts().subscribe((mYdata) => {
      this.Hostes = mYdata

    })

  }
  insertAHost(myData:any =[]) {
    this.hs.posthosts(myData).subscribe((data) => {
      alert('You Have New Host');
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
    this.hs.uploadImg(formData).subscribe((resp:any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.image = resp["msg"].url;
    });
  }
  deleteAHost(id:string) {
    this.hs.deletehosts(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  upsateHost(id:string,daty:any){
    this.hs.upthosts(id,daty).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }

  openAdd(){
   this.image = ""
   this.title = "New Host"
   this.host = {}
   this.hostAddUpdate = true
  }
  openUpdate(host : any){
    this.image = ""
    this.title = "Update Host"
    this.host = host 
   this.hostAddUpdate = false

  }
}
