import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[] = [];
  countryName: string = '';

  addCountries() {
    this.countryList.push(this.countryName);
  }
}
