import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cocktail/:name',
    loadChildren: () =>
      import('./features/cocktails/cocktails.module').then(
        (m) => m.CocktailsModule
      ),
    data: { preload: true },
  },
  {
    path: 'ingredients',
    loadChildren: () =>
      import('./features/ingredients/ingredients.module').then(
        (m) => m.IngredientsModule
      ),
    data: { preload: true },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, 
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
