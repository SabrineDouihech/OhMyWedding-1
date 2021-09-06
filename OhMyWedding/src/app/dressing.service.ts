import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DressingService {
  constructor(private http: HttpClient) {}

  getDressing() {
    return this.http.get('http://localhost:3000/api/dressing');
  }
 
postDressing(data : any){
    return this.http.post('http://localhost:3000/api/dressing',data);
}
deleteDressing(id:string){
    return this.http.delete(`http://localhost:3000/api/dressing/${id}`)
}

uptDressing(id:string,data:any){
    return this.http.put(`http://localhost:3000/api/dressing/${id}`,data)
}
uploadImg(img : any) {
    return this.http.post("http://localhost:3000/upload", img);
  }
}
