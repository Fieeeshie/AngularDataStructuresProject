import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = [
    'Toribio, Fiercieval',
    'Walter Inductivo',
    'Cano Roerenz',
    'Taay James Kent',
    'Xavier De Jesus',
    'Rodney Idanan',

  ];
  studentName: string = '';

  addStudents() {
    this.studentList.push(this.studentName);
  }
}
