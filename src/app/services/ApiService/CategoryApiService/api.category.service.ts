import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';
import { Category } from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceApiService {

  constructor(private http: HttpClient) { }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(environment.host+"/api/categories")
  }
  saveCategory(newCategory: Category): Observable<Category>{
    return this.http.post<Category>(environment.host+"/api/category", newCategory)
  }
  deleteCategory(id:number){
    return this.http.delete(environment.host+"/api/category?id="+id, { responseType: 'text' })
  }
  updateCategory(categoryUpdated:Category){
    return this.http.put(environment.host+"/api/categories",categoryUpdated)
  }
}
