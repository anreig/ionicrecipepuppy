declare interface Recipe {
    title: string;
    thumbnail: string;
    href: string;
    ingredients: Ingredient[]
}

declare interface Ingredient {
    name: string;
}

declare interface ApiResponse<T> {
    href: string;
    results: Array<T>;
    title: string;
    version: string;
}