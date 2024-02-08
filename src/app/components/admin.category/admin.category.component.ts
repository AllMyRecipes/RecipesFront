import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';
import { MessageService, SelectItem } from 'primeng/api';
@Component({
  selector: 'app-admin.category',
  templateUrl: './admin.category.component.html',
  styleUrls: ['./admin.category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  categories: Category[]=[]
  constructor(private categoriesService: CategoriesService ){}
  ngOnInit(): void {
    this.categoriesService.getAllCategories();
    this.categoriesService.allCategorie$.subscribe({
      next:(data)=> {
        this.categories = data
      },
      error:(error)=> console.log(error)
    })
  }
}
