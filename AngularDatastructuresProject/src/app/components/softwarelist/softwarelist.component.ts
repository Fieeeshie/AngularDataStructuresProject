import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = [];
  softwareName: string = '';

  addSoftwares() {
    this.softwareList.push(this.softwareName);
  }
}
