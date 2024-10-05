import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = [
    'Maria Clara',
    'Jose Rizal',
    'Andres Bonifacio',
    'Emilio Aguinaldo',
    'Apolinario Mabini'
  ];
  employeeName: string = '';

  addEmployees() {
    this.employeeList.push(this.employeeName);
  }
}
