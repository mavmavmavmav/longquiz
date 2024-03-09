import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeChanged = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Adobo', 'masarap', ['Ingredient 1', 'Ingredient 2']),
    new Recipe('Menudo', 'masarap', ['Ingredient 1', 'Ingredient 2']),
    // Add more recipes as needed
  ];

  selectedRecipe: Recipe | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.selectedRecipeChanged.emit(recipe);
  }

  onNewRecipe(): void {
    const newRecipe = new Recipe('New Recipe', 'New Description', []);
    this.recipes.push(newRecipe);
    this.onSelectRecipe(newRecipe);
  }
}
