import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = [
    'Mango',
    'Banana',
    'Pineapple',
    'Coconut',
    'Durian'
  ];
  fruitName: string = '';

  addFruits() {
    this.fruitList.push(this.fruitName);
  }
}
