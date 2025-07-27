import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, tap } from 'rxjs';
import { CocktailAPIModel } from '../models/cocktail-api.model';
import { mapToCocktailList } from '../utils/cocktail.utils';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  private readonly baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  private readonly http = inject(HttpClient); 
  private cache = new Map<string, CocktailAPIModel[]>();

  getCocktailByName(name: string): Observable<CocktailAPIModel[]> {
    const key = name.toLowerCase();

    if (this.cache.has(key)) {
      return of(this.cache.get(key)!);
    }

    return this.http.get<any>(`${this.baseUrl}/search.php?s=${name}`).pipe(
      map((res) => mapToCocktailList(res.drinks)),
      tap((cocktails) => {
        this.cache.set(key, cocktails);
      })
    );
  }
}
