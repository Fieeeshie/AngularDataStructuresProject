import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventList: string[] = [];
  eventName: string = '';

  addEvents() {
    this.eventList.push(this.eventName);
  }
}
