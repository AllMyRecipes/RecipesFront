import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 items!: MenuItem
 categories: Category[]= []
  constructor(private categoriesService: CategoriesService){}
  ngOnInit(): void {
    this.categoriesService.allCategorie$.subscribe({
      next:(data)=> {
        console.log(data)
        this.categories = data
      },
      error:(error)=> console.log(error)
    })
     const newCat = new Category("test")
     this.categoriesService.newCategory(newCat)

  }

}
