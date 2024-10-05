import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courseList: string[] = [];
  courseName: string = '';

  addCourses() {
    this.courseList.push(this.courseName);
  }
}
