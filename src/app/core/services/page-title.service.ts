import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class PageTitleService {
  constructor(private title: Title) {}

  setHomePageTitle(): void {
    this.title.setTitle('Cocktail For You');
  }

  setCocktailPageTitle(name: string): void {
    this.title.setTitle(`${this.format(name)} | Cocktail For You`);
  }

  setIngredientsPageTitle(name: string): void {
    this.title.setTitle(`${this.format(name)} | Cocktail For You`);
  }

  private format(name: string): string {
    return name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
