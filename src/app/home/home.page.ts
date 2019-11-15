import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RecipepuppyService } from './../services/recipepuppy.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searching = false;
  items = [];
  params = {};
  page = 1;
  ingredients = []

  constructor(
    private service: RecipepuppyService
  ) { }

  ngOnInit() {
    this.listRecipes();
  }

  doInfinite(infiniteScroll?) {
    this.params['page'] = this.page += 1;
    this.listRecipes(this.params, true);
    infiniteScroll.target.complete();
  }

  listRecipes(params?, infiniteScroll?) {
    this.service.getOrSearchRecipes(params).pipe(map(result => {
      infiniteScroll ?
        this.items.push(...result) :
        this.items = result;
      return this.items;
    })).subscribe();
  }

  search(event, ingredients) {
    if (ingredients) {
      this.params['i'] = this.ingredients.toString();
    } else if (event.target.value) {
      this.searching = true;
      this.params['q'] = event.target.value;
    } else {
      this.searching = false;
      this.items = [];
      this.ingredients = [];
      this.params = {};
    }
    this.listRecipes(this.params);
  }

  doRefresh(event) {
    this.listRecipes();
    event.target.complete();
  }

  ingredientSelected(event) {

    if (!this.ingredients.includes(event)) {
      this.ingredients.push(event.trim());
    } else {
      const index: number = this.ingredients.indexOf(event);
      this.ingredients.splice(index, 1);
    }
    this.params['page'] = 1;
    this.search(event, true);
  }
}
