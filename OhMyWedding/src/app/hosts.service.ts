import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HostsSercice {
  constructor(private http: HttpClient) {}
    gethosts() {
        return this.http.get('http://localhost:3000/api/hosts');
    }
    posthosts(data : any){
        return this.http.post('http://localhost:3000/api/hosts',data);
    }
    deletehosts(id:string){
        return this.http.delete(`http://localhost:3000/api/hosts/${id}`)
    }

    upthosts(id:string,data:any){
        return this.http.put(`http://localhost:3000/api/hosts/${id}`,data)
    }
    uploadImg(img : any) {
        return this.http.post("http://localhost:3000/upload", img);
      }

}
