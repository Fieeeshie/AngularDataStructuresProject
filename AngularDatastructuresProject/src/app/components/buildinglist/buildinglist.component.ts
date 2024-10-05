import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = [
    'Makati City Hall',
    'BGC Stopover Pavilion',
    'SM Megamall',
    'Greenbelt Mall',
    'The Manila Ocean Park'
  ]
  buildingName: string = '';

  addBuildings() {
    this.buildingList.push(this.buildingName);
  }
}
