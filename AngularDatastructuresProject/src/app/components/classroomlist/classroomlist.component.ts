import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: string[] = [
    'Room 169 - Science Lab',
    'Room 269 - Math Lab',
    'Room 369 - Computer Lab',
    'Room 469 - Art Room',
    'Room 569 - Library'
  ];
  classroomName: string = '';

  addClassrooms() {
    this.classroomList.push(this.classroomName);
  }
}
