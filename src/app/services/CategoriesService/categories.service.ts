import { Injectable } from '@angular/core';
import { CategoriesServiceApiService } from '../ApiService/CategoryApiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private CatApi: CategoriesServiceApiService) { }

  getAllCategories(){
    this.CatApi.getAllCategories().subscribe({
      next:(data) => console.log(data),
      error:(err)=> console.log(err)
    })

    }
}
