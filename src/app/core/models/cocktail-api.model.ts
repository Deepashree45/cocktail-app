export interface CocktailAPIModel {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  ingredients: string[];
}
