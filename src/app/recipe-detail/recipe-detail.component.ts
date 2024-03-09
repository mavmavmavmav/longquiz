import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() selectedRecipe: Recipe | null = null;

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient(ingredientName: string): void {
    if (this.selectedRecipe) {
      this.selectedRecipe.ingredients.push(ingredientName);
    }
  }

  onDeleteIngredient(ingredientName: string): void {
    if (this.selectedRecipe) {
      this.selectedRecipe.ingredients = this.selectedRecipe.ingredients.filter(
        (ingredient) => ingredient !== ingredientName
      );
    }
  }

  onClearIngredients(): void {
    if (this.selectedRecipe) {
      this.selectedRecipe.ingredients = [];
    }
  }
}
