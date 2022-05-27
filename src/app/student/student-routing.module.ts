import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [ { path: 'student', redirectTo: '/student/studentlist', pathMatch: 'full'},
{ path: '/student/studentlist', component: StudentlistComponent },
  { path:'student/addstudent', component: AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
