import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = [];
  lectureName: string = '';

  addLectures() {
    this.lectureList.push(this.lectureName);
  }
}
