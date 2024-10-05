import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvShowList: string[] = [
    'Breaking Bad',
    'Stranger Things',
    'The Crown',
    'Game of Thrones',
    'The Mandalorian'
  ];
  tvShowName: string = '';

  addTvShows() {
    this.tvShowList.push(this.tvShowName);
  }
}
