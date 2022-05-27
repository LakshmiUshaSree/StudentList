import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Student{
  StudentName:string;
  Email:string;
  PhoneNumber:number;
  Age:number;
  JoinedDate:string;
  Gender:string;
}

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students: Student[] = [];
  constructor(public studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.studentService.getAll().subscribe((data: Student[])=>{
      this.students = data;
      console.log(this.students);
    })  
  }
    
  }


