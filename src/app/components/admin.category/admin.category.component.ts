import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-admin.category',
  templateUrl: './admin.category.component.html',
  styleUrls: ['./admin.category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  categories: Category[]=[]
  clonedCategory: { [s: string]: Category } = {};
  visible: boolean = false;
  newCat!: string;

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
  onRowEditInit(category: Category){

    if(category.id){
      this.clonedCategory[category.id] = { ...category };
       console.log(this.clonedCategory)
    }

  }
  onRowEditSave(category: Category){
    console.log(category)

  }
  onRowEditCancel(category:Category, index:number){
    console.log(index)
    if(category.id)
    this.categoriesService.deleteCategory(category.id)
  }

  showModal(){
    this.visible = true;
  }
  postNewCat(){
    const category = new Category(this.newCat);
    this.categoriesService.newCategory(category)
    console.log(this.newCat)
  }
}
