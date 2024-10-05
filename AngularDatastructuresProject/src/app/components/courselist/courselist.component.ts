import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courseList: string[] = [
    'Bachelor of Science in Information Technology',
    'Bachelor of Arts in Communication',
    'Bachelor of Science in Business Administration',
    'Bachelor of Science in Accountancy',
    'Bachelor of Science in Civil Engineering'
  ];
  courseName: string = '';

  addCourses() {
    this.courseList.push(this.courseName);
  }
}
