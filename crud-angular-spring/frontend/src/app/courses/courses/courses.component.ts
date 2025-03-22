import { Component } from '@angular/core';
import { Course } from '../models/course';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front-end',
    },
  ];
  displayedColumns = ['name', 'category'];
}
