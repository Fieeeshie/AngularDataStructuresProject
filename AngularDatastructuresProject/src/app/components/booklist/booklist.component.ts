import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = [
    'Noli Me Tangere by José Rizal',
    'El Filibusterismo by José Rizal',
    'The Woman Who Had Two Navels by Nick Joaquin',
    'Dogeaters by Jessica Hagedorn',
    'Smaller and Smaller Circles by F.H. Batacan'
  ];
  bookName: string = '';

  addBooks() {
    this.bookList.push(this.bookName);
  }
}
