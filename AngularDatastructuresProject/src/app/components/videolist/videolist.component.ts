import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = [];
  videoName: string = '';

  addVideos() {
    this.videoList.push(this.videoName);
  }
}
