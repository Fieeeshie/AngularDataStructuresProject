import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = [];
  computerHardwareName: string = '';

  addComputerHardwares() {
    this.computerHardwareList.push(this.computerHardwareName);
  }
}
