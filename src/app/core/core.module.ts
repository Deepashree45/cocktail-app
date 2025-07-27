import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailFilterPipe } from './pipes/cocktail-filter.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [CocktailFilterPipe, SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, CocktailFilterPipe],
})
export class CoreModule {}
