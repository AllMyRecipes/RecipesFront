import { Injectable } from '@angular/core';
import { CategoriesServiceApiService } from '../ApiService/CategoryApiService/api.service';
import { Category } from 'src/app/models/Category';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private AllCategoriesSubject$:Subject<Category> = new Subject<Category>();

  constructor(private catApi: CategoriesServiceApiService) { }

  getAllCategories(){
    this.catApi.getAllCategories().subscribe({
      next:(data) => console.log(data),
      error:(err)=> console.log(err)
    })
    }
  newCategory(category : Category){
    this.catApi.saveCategory(category).subscribe({
      next:(data)=>{
        this.getAllCategories();
        console.log(data, "newcat")
      },
      error:(error)=> console.log(error)
    })
  }
  deleteCategory(id : number){
    this.catApi.deleteCategory(id).subscribe({
      next:(data)=> console.log(data,"delete"),
      error:(e)=> console.log(e)
    })
    this.getAllCategories();
  }
}
