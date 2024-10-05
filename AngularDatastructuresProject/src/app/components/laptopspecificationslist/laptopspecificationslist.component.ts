import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecificationList: string[] = [
    'Intel Core i5',
    'Intel Core i7',
    '16GB RAM',
    '512GB SSD',
    'NVIDIA GeForce GTX 1650'
  ];
  laptopSpecificationName: string = '';

  addLaptopSpecifications() {
    this.laptopSpecificationList.push(this.laptopSpecificationName);
  }
}
