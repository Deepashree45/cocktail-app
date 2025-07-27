import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  COCKTAIL_NAMES,
  COMMON_COCKTAIL_ICON,
} from 'src/app/core/data/cocktail.data';
import { PageTitleService } from 'src/app/core/services/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cocktailNames = COCKTAIL_NAMES;
  icon = COMMON_COCKTAIL_ICON;

  constructor(private router: Router, private pageTitle: PageTitleService) {}
  ngOnInit(): void {
    this.pageTitle.setHomePageTitle();
  }

  goToCocktail(name: string) {
    this.router.navigate(['/cocktail', name]);
  }
  trackByName(index: number, name: string) {
    return name;
  }
}
