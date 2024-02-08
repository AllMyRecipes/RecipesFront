import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/CategoriesService/categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private categoriesService: CategoriesService){}
  ngOnInit(): void {

  }

}
