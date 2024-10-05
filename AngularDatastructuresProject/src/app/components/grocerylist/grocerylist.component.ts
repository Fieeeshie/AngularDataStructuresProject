import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: string[] = [
    'Rice',
    'Chicken',
    'Eggs',
    'Vegetables',
    'Canned Goods'
  ];
  groceryName: string = '';

  addGroceries() {
    this.groceryList.push(this.groceryName);
  }
}
