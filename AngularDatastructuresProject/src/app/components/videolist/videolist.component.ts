import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = [
    'Video 1: Introduction to Angular',
    'Video 2: Angular Directives',
    'Video 3: Building Components',
    'Video 4: Routing in Angular',
    'Video 5: Angular Services'
  ];
  videoName: string = '';

  addVideos() {
    this.videoList.push(this.videoName);
  }
}
