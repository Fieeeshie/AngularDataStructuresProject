import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [
    'Starry Night - Vincent van Gogh',
    'Mona Lisa - Leonardo da Vinci',
    'The Persistence of Memory - Salvador Dalí',
    'The Scream - Edvard Munch',
    'Girl with a Pearl Earring - Johannes Vermeer'
  ];
  paintingName: string = '';

  addPaintings() {
    this.paintingList.push(this.paintingName);
  }
}
