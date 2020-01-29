import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyManagerComponent } from './academy-manager.component';
import { AdminAcademiesComponent } from './admin-academies/admin-academies.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { MyAcademiesComponent } from './my-academies/my-academies.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { MyDeclarationsComponent } from './my-declarations/my-declarations.component';


const routes: Routes = [
  {
    path: '',
    component: AcademyManagerComponent,
    children: [
      {
        path: 'admin-academies',
        component: AdminAcademiesComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'admin-students',
        component: AdminStudentsComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'admin-teachers',
        component: AdminTeachersComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'my-academies',
        component: MyAcademiesComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'profile/:userId',
        component: AccountProfileComponent
      },
      {
        path: 'my-declarations',
        component: MyDeclarationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyManagerRoutingModule { }
