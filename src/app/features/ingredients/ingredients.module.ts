import { NgModule } from '@angular/core';
import { IngredientsComponent } from './ingredients.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { CoreModule } from "../../core/core.module";


@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IngredientsRoutingModule ,CoreModule
  ],
})
export class IngredientsModule {}
