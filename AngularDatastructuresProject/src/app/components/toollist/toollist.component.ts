import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourList: string[] = [
    'City Tour',
    'Beach Adventure',
    'Mountain Hiking',
    'Historical Sites',
    'Wildlife Safari'
  ];
  tourName: string = '';

  addTours() {
    this.tourList.push(this.tourName);
  }
}
