import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  constructor() { }

  @Input() recipeItem: Recipe;
  @Input() ingredients: Ingredient;
  @Output() onIngredientSelected = new EventEmitter<any>();

  ngOnInit() { }

  onIngredientClick(ingredient) {
    this.onIngredientSelected.emit(ingredient);
  }

}
