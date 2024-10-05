import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = [];
  podcastName: string = '';

  addPodcasts() {
    this.podcastList.push(this.podcastName);
  }
}
