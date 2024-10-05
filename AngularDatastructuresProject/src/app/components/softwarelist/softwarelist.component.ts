import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = [
    'Visual Studio Code',
    'JetBrains IntelliJ IDEA',
    'Adobe Photoshop',
    'Microsoft Office',
    'Slack'
  ];
  softwareName: string = '';

  addSoftwares() {
    this.softwareList.push(this.softwareName);
  }
}
