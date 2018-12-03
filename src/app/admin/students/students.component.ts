import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/data/api.service';

@Component({
  selector: 'kgp-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

  students = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getStudents().subscribe(data => {
      const users: any = data;
      this.students = users.results;
      console.log(this.students);
    });
  }

}
