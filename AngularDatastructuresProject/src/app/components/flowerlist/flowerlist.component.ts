import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[] = [];
  flowerName: string = '';

  addFlowers() {
    this.flowerList.push(this.flowerName);
  }

}
