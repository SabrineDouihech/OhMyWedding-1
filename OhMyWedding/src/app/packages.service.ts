import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  constructor(private http: HttpClient) {}

  getPackages() {
    return this.http.get('http://localhost:3000/api/package');
  }

  postPackages(data: any) {
    return this.http.post('http://localhost:3000/api/package', data);
  }

  addtofavorites(data: any) {
    return this.http.post('http://localhost:3000/api/package', data);
  }
  uploadImg(img: any) {
    return this.http.post('http://localhost:3000/upload', img);
  }

  searchByCategory(query: string, category: string) {
    return this.http.get<any[]>(
      `http://localhost:3000/api/package/search?q=${query}&category=${category}`
    );
  }

  updatePackage(packageId: number, categoryType: string, categoryId: number) {
    return this.http.put(`http://localhost:3000/api/package/${packageId}`, {
      categoryId,
      type: categoryType,
    });
  }
  deleteAPackage(id: string) {
    return this.http.delete(`http://localhost:3000/api/package/${id}`);
  }
}
