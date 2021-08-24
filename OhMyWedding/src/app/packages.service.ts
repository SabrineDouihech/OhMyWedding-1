import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PackagesService {

  constructor(private http : HttpClient) {}


  getPackages(){
    return this.http.get('http://localhost:3000/api/getpackages');
  }

  // createPackages(data: any) {
  //   return this.http.post('http://localhost:3000/api/createpackages', data);
  // }
  

}
