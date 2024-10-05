import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationList: string[] = [
    'The Daily',
    'Stuff You Should Know',
    'Crime Junkie',
    'How I Built This',
    'The Joe Rogan Experience'
  ];
  presentationName: string = '';

  addPresentations() {
    this.presentationList.push(this.presentationName);
  }
}
