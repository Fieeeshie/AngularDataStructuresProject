import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [];
  paintingName: string = '';

  addPaintings() {
    this.paintingList.push(this.paintingName);
  }
}
