# WELCOME TO IONIC RECIPE PUPPY! :rocket: :dog:

[![Build Status](https://travis-ci.com/anreig/ionicrecipepuppy.svg?branch=master)](https://travis-ci.com/anreig/ionicrecipepuppy)
[![CodeFactor](https://www.codefactor.io/repository/github/anreig/ionicrecipepuppy/badge)](https://www.codefactor.io/repository/github/anreig/ionicrecipepuppy)
[![Coverage Status](https://coveralls.io/repos/github/anreig/ionicrecipepuppy/badge.svg?branch=master)](https://coveralls.io/github/anreig/ionicrecipepuppy?branch=master)

![Recipe Puppy Ionic App](http://www.recipepuppy.com/img/logonew.png "Recipe Puppy Ionic App")

## [Demo](https://anreig.github.io/ionicrecipepuppy/)

Using the [Recipe Puppy API](<http://www.recipepuppy.com/about/api/>) I have built an app that allows the user to search recipes filtering by name or by one/many ingredients.

## Technology stack used

The technology stack used for this example, including libraries and tools are:

- Ionic
- Angular 8
- Visual Studio Code
- Ionic generator
- Karma

## Best practices and patterns applied

Lazy loading for modules (eg)

    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)

Container - presenter pattern 

    <app-recipe [ingredients]="recipe.ingredients.split(',')" [recipeItem]="recipe"
          (onIngredientSelected)="ingredientSelected($event)"></app-recipe>

using OnPush change detection strategy for performance

     ...
     changeDetection: ChangeDetectionStrategy.OnPush }) export class RecipeComponent {

## Development server

Run npm install to install dependencies.

Run ionic serve for a dev server. Navigate to http://localhost:8100/. The app will automatically reload if you change any of the source files.

## Improvements TODO

1. Add a lateral Menu [Ionic Menu](https://ionicframework.com/docs/api/menu).
2. Share Recipe functionality [Ionic Native Social Sharing](https://ionicframework.com/docs/native/social-sharing).