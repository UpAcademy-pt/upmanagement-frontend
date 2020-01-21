import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyManagerComponent } from './academy-manager.component';
import { AdminAcademiesComponent } from './admin-academies/admin-academies.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';


const routes: Routes = [
  {
    path:'',
    component: AcademyManagerComponent,
    children: [
      {
        path:'admin-academies',
        component: AdminAcademiesComponent
      },
      {
        path:'admin-students',
        component: AdminStudentsComponent
      },
      {
      path:'admin-teachers',
      component: AdminTeachersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyManagerRoutingModule { }
