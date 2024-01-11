import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("feijoada", "prato com feijão e porco", "https://assets.unileversolutions.com/recipes-v2/229468.jpg"),
    new Recipe("Macarronada", "prato com bastante macarrão", "https://www.mariareceita.com.br/wp-content/uploads/2022/11/receita-macarronada-simples-facil-com-molho.jpg")
  ]
}
