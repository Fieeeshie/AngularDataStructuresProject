import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraryList: string[] = [
    'National Library of the Philippines',
    'Ateneo de Manila University Library',
    'University of the Philippines Main Library',
    'De La Salle University Library',
    'San Beda University Library'
  ];
  libraryName: string = '';

  addLibraries() {
    this.libraryList.push(this.libraryName);
  }
}
