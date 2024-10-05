import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: string[] = [
    'Boracay',
    'Palawan',
    'Cebu',
    'Batanes',
    'Siargao'
  ];
  destinationName: string = '';

  addDestinations() {
    this.destinationList.push(this.destinationName);
  }
}
