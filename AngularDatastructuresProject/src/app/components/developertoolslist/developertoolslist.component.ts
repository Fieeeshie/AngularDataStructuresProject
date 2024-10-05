import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent {
  developerToolList: string[] = [
    'Visual Studio Code',
    'Git',
    'Postman',
    'Docker',
    'Sublime Text'
  ];
  developerToolName: string = '';

  addDeveloperTools() {
    this.developerToolList.push(this.developerToolName);
  }
}
