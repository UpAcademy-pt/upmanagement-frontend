import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyManagerRoutingModule } from './academy-manager-routing.module';
import { AcademyManagerComponent } from './academy-manager.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminAcademiesComponent } from './admin-academies/admin-academies.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { MyAcademiesComponent } from './my-academies/my-academies.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AccountProfileComponent } from './account-profile/account-profile.component';


@NgModule({
  declarations: [AcademyManagerComponent, SidebarComponent, AdminSidebarComponent, AdminAcademiesComponent, AdminStudentsComponent,
    AdminTeachersComponent, MyAcademiesComponent, MyProfileComponent, AccountProfileComponent],
  imports: [
    CommonModule,
    AcademyManagerRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AcademyManagerModule { }
