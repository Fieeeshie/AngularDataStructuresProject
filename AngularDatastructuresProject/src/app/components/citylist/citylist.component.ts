import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = [
    'Manila',
    'Quezon City',
    'Cebu City',
    'Davao City',
    'Zamboanga City'
  ];
  cityName: string = '';

  addCities() {
    this.cityList.push(this.cityName);
  }
}
