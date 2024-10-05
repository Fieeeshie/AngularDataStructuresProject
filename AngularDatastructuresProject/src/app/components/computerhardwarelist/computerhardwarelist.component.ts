import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = [
    'Asus ROG Strix GTX 1660',
    'Gigabyte AORUS GeForce RTX 3080',
    'Intel Core i5-12400F',
    'AMD Ryzen 5 5600X',
    'MSI B450 TOMAHAWK MAX'
  ];
  computerHardwareName: string = '';

  addComputerHardwares() {
    this.computerHardwareList.push(this.computerHardwareName);
  }
}
