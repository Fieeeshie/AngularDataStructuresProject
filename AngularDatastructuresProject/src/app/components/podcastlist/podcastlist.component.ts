import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = [
    'The Daily',
    'Stuff You Should Know',
    'Crime Junkie',
    'How I Built This',
    'The Joe Rogan Experience'
  ];
  podcastName: string = '';

  addPodcasts() {
    this.podcastList.push(this.podcastName);
  }
}
