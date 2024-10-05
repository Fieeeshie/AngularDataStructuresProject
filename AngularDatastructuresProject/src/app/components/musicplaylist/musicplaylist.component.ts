import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[] = [
    'Tadhana - Up Dharma Down',
    'Buwan - Juan Karlos',
    'Ikaw - Yeng Constantino',
    'Kahit Ayaw Mo Na - This Band',
    'Hawak Kamay - Yeng Constantino'
  ];
  musicName: string = '';

  addMusics() {
    this.musicList.push(this.musicName);
  }
}
