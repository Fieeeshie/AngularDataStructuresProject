import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraryList: string[] = [];
  libraryName: string = '';

  addLibraries() {
    this.libraryList.push(this.libraryName);
  }
}
