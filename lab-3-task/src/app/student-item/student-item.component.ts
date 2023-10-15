import { Component, Input } from '@angular/core';
import { Student } from '../interfaces';
@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
})
export class StudentItemComponent {
  @Input() student: Student;
  constructor() {
    this.student = {} as any;
  }
}
