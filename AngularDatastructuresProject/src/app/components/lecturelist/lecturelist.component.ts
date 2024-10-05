import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = [
    'Introduction to Computer Science',
    'Fundamentals of Programming',
    'Data Structures and Algorithms',
    'Web Development Basics',
    'Software Engineering Principles'
  ];
  lectureName: string = '';

  addLectures() {
    this.lectureList.push(this.lectureName);
  }
}
