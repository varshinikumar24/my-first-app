import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe : Recipe[]=[
     new Recipe('Chicken tikka masala','Thick, curd based chicken curry with  a melange of spices and chicken breasts tossed together. Pair with rice or chapati and have a whole meal for a dinner party.','https://i.ndtvimg.com/i/2015-11/butter-chicken-625_625x350_61447362879.jpg'),
     new Recipe('Cauliflower tikka masala with chickpeas','The cauliflower nooks and crannies are particularly good at soaking up all the intense flavors of the sauce','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6885403.jpg&w=550&h=550&c=sc&poi=face&q=85'),
    new Recipe('test recipe','a sample recipe','https://www.internationalcuisine.com/wp-content/uploads/2018/06/chicken-karahi.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
