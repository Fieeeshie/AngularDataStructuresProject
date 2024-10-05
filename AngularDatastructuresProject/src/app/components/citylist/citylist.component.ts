import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = ['Manila', 'Cebu City', 'Davao City', 'Quezon City', 'Iloilo City'];
  cityName: string = '';

  addCities() {
    this.cityList.push(this.cityName);
    this.cityName = '';
  }
}
