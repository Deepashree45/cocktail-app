import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cocktailFilter',
  pure: true,
})
export class CocktailFilterPipe implements PipeTransform {
  transform(
    cocktails: any[],
    searchText: string,
    filters: { alcoholic: boolean; nonAlcoholic: boolean },
    sortAsc: boolean
  ): any[] {
    if (!cocktails) return [];

    let result = cocktails.filter((drink) =>
      drink.strDrink.toLowerCase().includes((searchText || '').toLowerCase())
    );

    result = result.filter((drink) => {
      const isAlcoholic = drink.strAlcoholic === 'Alcoholic';
      const isNonAlcoholic = drink.strAlcoholic === 'Non alcoholic';

      return (
        (!filters.alcoholic && !filters.nonAlcoholic) ||
        (filters.alcoholic && isAlcoholic) ||
        (filters.nonAlcoholic && isNonAlcoholic)
      );
    });

    result.sort((a, b) =>
      sortAsc
        ? a.strDrink.localeCompare(b.strDrink)
        : b.strDrink.localeCompare(a.strDrink)
    );

    return result;
  }
}
