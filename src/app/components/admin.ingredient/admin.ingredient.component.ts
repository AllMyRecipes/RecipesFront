import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient';
import { IngredientsService } from 'src/app/services/IngredientService/ingredients.service';

@Component({
  selector: 'app-admin.ingredient',
  templateUrl: './admin.ingredient.component.html',
  styleUrls: ['./admin.ingredient.component.css']
})

export class AdminIngredientComponent implements OnInit {
ingredients : Ingredient[] = []

constructor(private ingredientService : IngredientsService){}

ngOnInit(): void {
  this.ingredientService.getAllIngredients();
  this.ingredientService.allIngredients$.subscribe({
    next: data=> this.ingredients = data,
    error: err => console.log(err)
  })
}
deleteIngredient(id : number){
  this.ingredientService.deleteIngredient(id)
}
}
