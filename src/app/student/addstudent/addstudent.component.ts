import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  form:FormGroup;

  constructor(public studentService:StudentService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
     
        studentname: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$"),Validators.maxLength(50)]),
        gender: new FormControl('Male', Validators.required),
        age:new FormControl('',[Validators.required, Validators.maxLength(2)]),
        email: new FormControl('',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
        phonenumber: new FormControl('',[ Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
        joineddate: new FormControl('', Validators.required),
      });

  }
 get f(){
   return this.form.controls;
 }
  
  submit(){
    console.log(this.form.value);
    this.studentService.create(this.form.value).subscribe(res =>{
      
    console.log("Student Added Successfully")
    this.router.navigateByUrl('student/studentlist')
    })
  }

}
