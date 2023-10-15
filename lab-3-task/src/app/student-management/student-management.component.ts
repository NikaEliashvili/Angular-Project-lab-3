import { Component } from '@angular/core';
import { Student } from '../interfaces';
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css'],
})
export class StudentManagementComponent {
  studentsArr: Student[];
  constructor() {
    this.studentsArr = [];
  }
  onClick(firstName: string, lastName: string, personalNumber: string) {
    this.studentsArr.push({ firstName, lastName, personalNumber });
  }
}
