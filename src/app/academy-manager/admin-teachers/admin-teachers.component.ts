import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.scss']
})
export class AdminTeachersComponent implements OnInit {

  public teachers$: ReplaySubject<User[]> = new ReplaySubject(1);

  constructor(
    private userService: UserServiceService
  ) {
    this.getAllTeachers();
  }

  ngOnInit() {
  }

  public getAllTeachers() {
    this.userService.getUsers('','','SUPERUSER').subscribe(
      (res:any) => {
      this.teachers$.next(res)
      }
    )
  }

}
