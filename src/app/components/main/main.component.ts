import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categoryList:Category[] = [];
  constructor(private categoriesService: CategoriesService){}
  ngOnInit(): void {
    this.categoriesService.getAllCategories();
    this.categoriesService.allCategorie$.subscribe({
      next: data=> this.categoryList = data,
      error: error=> console.log(error),
    },
    )
  }

}
