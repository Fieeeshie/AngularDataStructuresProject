import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = ['Empire State Building', 'Burj Khalifa', 'Eiffel Tower', 'The Shard', 'One World Trade Center'];
  buildingName: string = '';

  addBuildings() {
    this.buildingList.push(this.buildingName);
    this.buildingName = '';
  }
}
