import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = [];
  laptopName: string = '';

  addLaptops() {
    this.laptopList.push(this.laptopName);
  }
}
