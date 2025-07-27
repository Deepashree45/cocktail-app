import { Component, OnInit, OnDestroy } from '@angular/core';
import { CocktailService } from 'src/app/core/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CocktailAPIModel } from 'src/app/core/models/cocktail-api.model';
import { Subscription } from 'rxjs';
import { PageTitleService } from 'src/app/core/services/page-title.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent implements OnInit, OnDestroy {
  cocktails: CocktailAPIModel[] = [];
  loading: boolean = false;
  searchText: string = '';
  cocktailName: string = '';
  sortAsc: boolean = true;
  showSearch: boolean = false;
  cocktailGroup: string = '';

  filters = {
    alcoholic: false,
    nonAlcoholic: false,
  };

  private routeSub?: Subscription;
  private dataSub?: Subscription;

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute,
    private pageTitle: PageTitleService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.cocktailName = params['name'];
      if (this.cocktailName) {
        this.getCocktails(this.cocktailName);
        this.pageTitle.setCocktailPageTitle(this.cocktailName);
      }
    });
  }

  getCocktails(name: string) {
    this.loading = true;
    this.cocktailGroup = name;

    this.dataSub = this.cocktailService.getCocktailByName(name).subscribe({
      next: (res) => {
        this.cocktails = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  toggleFilter(key: 'alcoholic' | 'nonAlcoholic', event: any) {
    this.filters = {
      ...this.filters,
      [key]: event.target.checked,
    };
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchText = '';
    }
  }

  toggleSort() {
    this.sortAsc = !this.sortAsc;
  }


  get formattedCocktailName() {
    return this.cocktailName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getUrlName(name: string){
    return name.replace(/ /g, '-');
  }

  trackById(index: number, item: CocktailAPIModel) {
    return item.idDrink;
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.dataSub?.unsubscribe();
  }
}
