import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*PrimeNG Modules*/
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TagsComponent } from './components/tags/tags.component';
import { CardsComponent } from './components/cards/cards.component';
import { AdminCategoryComponent } from './components/admin.category/admin.category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminRecipesComponent } from './components/admin.recipes/admin.recipes.component';
import { AdminIngredientComponent } from './components/admin.ingredient/admin.ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TagsComponent,
    CardsComponent,
    AdminCategoryComponent,
    NavbarComponent,
    AdminRecipesComponent,
    AdminIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    TagModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
