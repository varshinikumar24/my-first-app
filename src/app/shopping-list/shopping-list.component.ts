import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
   new Ingredient("tomatoes",5),
   new Ingredient("potatoes",10),
   new Ingredient("apples",6)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientsAdded(Newingredient : Ingredient){
     this.ingredients.push(Newingredient);
  }
}
