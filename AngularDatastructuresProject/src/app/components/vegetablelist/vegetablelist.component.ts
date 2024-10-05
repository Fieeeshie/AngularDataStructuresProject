import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[] = [
    'Carrot',
    'Broccoli',
    'Spinach',
    'Tomato',
    'Cucumber'
  ];
  vegetableName: string = '';

  addVegetables() {
    this.vegetableList.push(this.vegetableName);
  }
}
