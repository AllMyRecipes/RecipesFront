import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AdminCategoryComponent } from './components/admin.category/admin.category.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"admin/categories", component:AdminCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
