import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[] = [];
  toolName: string = '';

  addTools() {
    this.toolList.push(this.toolName);
  }
}
