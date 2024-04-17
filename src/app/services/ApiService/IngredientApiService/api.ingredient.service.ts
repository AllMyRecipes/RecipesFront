import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';
import { Ingredient } from 'src/app/models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ApiIngredientService {

  constructor(private http: HttpClient) { }

  getAllIngredients():Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(environment.host+"/api/ingredients")
  }
  postIngredient(newIngredient: Ingredient):Observable<Ingredient>{
    return this.http.post<Ingredient>(environment.host+"/api/ingredient", newIngredient)
  }
  deleteIngredient(id:number){
    return this.http.delete(environment.host+"/api/ingredient?id=" + id, {responseType : 'text'})
  }
}
