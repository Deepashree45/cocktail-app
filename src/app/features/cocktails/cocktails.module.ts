import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from "../../core/core.module";


@NgModule({
  declarations: [CocktailsComponent],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    FormsModule,
    CoreModule
]
})
export class CocktailsModule { }
