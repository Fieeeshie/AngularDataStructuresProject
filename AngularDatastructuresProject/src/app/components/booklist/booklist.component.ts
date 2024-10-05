import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = ['1984', 'To Kill a Mockingbird', 'The Great Gatsby', 'Pride and Prejudice', 'Moby-Dick'];
  bookName: string = '';

  addBooks() {
    this.bookList.push(this.bookName);
  }
}
