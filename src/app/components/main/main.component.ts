import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private categoriesService: CategoriesService){}
  ngOnInit(): void {
    // const cat = new Category("newCat");
    // this.categoriesService.newCategory(cat)
    this.categoriesService.getAllCategories()
    // this.categoriesService.deleteCategory(1)
  }

}
