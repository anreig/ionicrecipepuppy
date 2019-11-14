declare interface Recipe {
    title: string;
    thumbnail: string;
    href: string;
    ingredients: Ingredient[]
}

declare interface Ingredient {
    name: string;
}