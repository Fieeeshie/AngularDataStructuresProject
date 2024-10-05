import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectList: string[] = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science'
  ];
  subjectName: string = '';

  addSubjects() {
    this.subjectList.push(this.subjectName);
  }
}
