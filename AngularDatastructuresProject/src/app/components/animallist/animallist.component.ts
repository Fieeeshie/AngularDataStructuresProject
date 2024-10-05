import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animalList: string[] = ['Lion', 'Elephant', 'Tiger', 'Giraffe', 'Zebra'];
  animalName: string = '';

  addAnimals() {
    this.animalList.push(this.animalName);
  }
}
