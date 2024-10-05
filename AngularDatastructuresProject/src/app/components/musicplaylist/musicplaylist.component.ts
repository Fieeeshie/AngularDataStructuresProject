import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[] = [];
  musicName: string = '';

  addMusics() {
    this.musicList.push(this.musicName);
  }
}
