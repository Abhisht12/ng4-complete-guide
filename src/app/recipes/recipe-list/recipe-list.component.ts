import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'http://images.media-allrecipes.com/userphotos/250x250/142350.jpg'),
    new Recipe('A test recipe', 'This is simple a test', 'http://images.media-allrecipes.com/userphotos/250x250/142350.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
