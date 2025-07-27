import { CocktailAPIModel } from '../models/cocktail-api.model';

export function mapToCocktailList(rawDrinks: any[]): CocktailAPIModel[] {
  return (rawDrinks || []).map((drink: any): CocktailAPIModel => ({
    idDrink: drink.idDrink,
    strDrink: drink.strDrink,
    strDrinkAlternate: drink.strDrinkAlternate,
    strCategory: drink.strCategory,
    strAlcoholic: drink.strAlcoholic,
    strDrinkThumb: drink.strDrinkThumb,
    ingredients: extractIngredients(drink),
  }));
}

function extractIngredients(drink: any): string[] {
  const ingredients: string[] = [];
  const seen = new Set<string>();

  for (let i = 1; i <= 15; i++) {
    const rawIngredient = drink[`strIngredient${i}`];
    if (rawIngredient) {
      const key = rawIngredient.trim().toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        ingredients.push(rawIngredient.trim());
      }
    }
  }

  return ingredients;
}
