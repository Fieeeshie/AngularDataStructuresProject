import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventList: string[] = [
    'Sinulog Festival',
    'Ati-Atihan Festival',
    'Pahiyas Festival',
    'Panagbenga Festival',
    'Kadayawan Festival'
  ];
  eventName: string = '';

  addEvents() {
    this.eventList.push(this.eventName);
  }
}
