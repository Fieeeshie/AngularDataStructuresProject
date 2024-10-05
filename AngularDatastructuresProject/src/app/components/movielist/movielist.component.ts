import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = [];
  movieName: string = '';

  addMovies() {
    this.movieList.push(this.movieName);
  }
}
