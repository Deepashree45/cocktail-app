import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CocktailService } from 'src/app/core/services/cocktail.service';
import { CocktailAPIModel } from 'src/app/core/models/cocktail-api.model';
import { PageTitleService } from 'src/app/core/services/page-title.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  cocktailName: string | null = null;
  cocktailGroup: string | null = null;
  drink: CocktailAPIModel | null = null;
  ingredients: string[] = [];
  loading: boolean = false;

  private cocktailSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private pageTitle: PageTitleService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const rawGroup = routeParams.get('group');
    const rawName = routeParams.get('name');

    this.cocktailGroup = rawGroup || null;
    this.cocktailName = rawName?.replace(/-/g, ' ') || null;

    if (this.cocktailName) {
      this.fetchDrinkDetails(this.cocktailName);
      this.pageTitle.setIngredientsPageTitle(this.cocktailName);
    }
  }

  fetchDrinkDetails(name: string) {
    this.loading = true;
    this.cocktailSub = this.cocktailService.getCocktailByName(name).subscribe({
      next: (res) => {
        const drinks = res || [];
        const matched = drinks.find(
          (d) => d.strDrink.toLowerCase() === name.toLowerCase()
        );

        if (matched) {
          this.drink = matched;
          this.ingredients = matched.ingredients;
        }

        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  //To get the ingredients images
  getIngredientImage(name: string){
    return `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
  }

  get formattedCocktailName() {
    return (
      this.cocktailName
        ?.split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || ''
    );
  }

  trackByName(index: number, ingredient: string) {
    return ingredient;
  }

  ngOnDestroy(): void {
    if (this.cocktailSub) {
      this.cocktailSub.unsubscribe();
    }
  }
}
