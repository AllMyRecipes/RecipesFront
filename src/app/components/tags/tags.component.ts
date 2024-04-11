import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Input()category!: Category

constructor(private categoriesService: CategoriesService){
}
ngOnInit(): void {

}
deleteCategory(id: number){
  this.categoriesService.deleteCategory(id)
}
}
