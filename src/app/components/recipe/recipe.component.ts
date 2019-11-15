import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeComponent {

  constructor() { }

  @Input() recipeItem: Recipe;
  @Input() ingredients: Ingredient;
  @Output() onIngredientSelected = new EventEmitter<any>();

  onIngredientClick(ingredient) {
    this.onIngredientSelected.emit(ingredient);
  }

}
