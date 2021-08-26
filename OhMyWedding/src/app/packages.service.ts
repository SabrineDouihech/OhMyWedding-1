import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PackagesService {

  constructor(private http: HttpClient) { }

  // getPack(){
  //   return this.http.get('http://localhost:3000/api/getpackage');
  // }

  //  postPack(data:any){
  //    return this.http.post('http://localhost:3000/api/postpackage',data);
  //  }

  //  deletePack(id:number){
  //    return this.http.delete('http://localhost:3000/api/deletepackage'+id)
  //  }

  //  updatePack(id:number,data:any){
  //    return this.http.put('http://localhost:3000/api/updatepackage'+id,data)
  //  }





  getPackages() {
    return this.http.get('http://localhost:3000/api/getpackages');
  }

  // createPackages(data: any) {
  //   return this.http.post('http://localhost:3000/api/createpackages', data);
  // }


}
