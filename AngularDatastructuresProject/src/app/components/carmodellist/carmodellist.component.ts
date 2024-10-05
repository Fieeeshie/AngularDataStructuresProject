import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = ['Toyota Corolla', 'Honda Civic', 'Tesla Model 3', 'Ford Mustang', 'BMW 3 Series'];
  carModelName: string = '';

  addCarModels() {
    this.carModelList.push(this.carModelName);
    this.carModelName = ''
  }
}
