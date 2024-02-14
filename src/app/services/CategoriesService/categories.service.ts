import { Injectable } from '@angular/core';
import { CategoriesServiceApiService } from '../ApiService/CategoryApiService/api.service';
import { Category } from 'src/app/models/Category';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private AllCategoriesSubject$:BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  allCategorie$:Observable<Category[]> = this.AllCategoriesSubject$.asObservable();

  constructor(private catApi: CategoriesServiceApiService) { }

  getAllCategories(){
    this.catApi.getAllCategories().subscribe({
      next:(data) => this.AllCategoriesSubject$.next(data),
      error:(err)=> console.log(err)
    })
    }
  newCategory(category : Category){
    this.catApi.saveCategory(category).subscribe({
      next:()=>{
        this.getAllCategories();
      },
      error:(error)=> console.log(error)
    })
  }
  deleteCategory(id : number){
    this.catApi.deleteCategory(id).subscribe({
      next:()=> this.getAllCategories(),
      error:(e)=> console.log(e)
    })
    this.getAllCategories();
  }
}
