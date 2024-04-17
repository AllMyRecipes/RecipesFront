import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

import { AdminRecipesComponent } from './components/admin.recipes/admin.recipes.component';
import { AdminIngredientComponent } from './components/admin.ingredient/admin.ingredient.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"admin/recipes", component:AdminRecipesComponent},
  {path:"admin/ingredients", component:AdminIngredientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
