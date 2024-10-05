import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = [
    'Heneral Luna',
    'One More Chance',
    'The Hows of Us',
    'Kita Kita',
    'Hello, Love, Goodbye',
  ];
  movieName: string = '';

  addMovies() {
    this.movieList.push(this.movieName);
  }
}
