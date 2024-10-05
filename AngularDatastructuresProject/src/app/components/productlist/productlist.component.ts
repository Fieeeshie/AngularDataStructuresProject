import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productList: string[] = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smartwatch',
    'Tablet'
  ];
  productName: string = '';

  addProducts() {
    this.productList.push(this.productName);
  }
}
