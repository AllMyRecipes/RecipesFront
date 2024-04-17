import { Injectable } from '@angular/core';
import { ApiIngredientService } from '../ApiService/IngredientApiService/api.ingredient.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private AllIngredientsSubject$:BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);
  allIngredients$:Observable<Ingredient[]> = this.AllIngredientsSubject$.asObservable();
  constructor(private IngredientApi : ApiIngredientService) { }

  getAllIngredients(){
    this.IngredientApi.getAllIngredients().subscribe({
      next:(ingredients) => this.AllIngredientsSubject$.next(ingredients),
      error:(error) => console.log(error)
    })
  }
  saveIngredient(ingredient: Ingredient){
    this.IngredientApi.postIngredient(ingredient).subscribe({
      next:()=> this.getAllIngredients(),
      error:(err)=> console.log(err)
    })
  }
  deleteIngredient(id:number){
    this.IngredientApi.deleteIngredient(id).subscribe({
      next:data => {
        this.getAllIngredients();
        console.log(data)
      },
      error: error=> console.log(error),
    })
  }
}
