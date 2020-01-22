import { Component, OnInit } from '@angular/core';
//import { AccountService } from '../shared/services/account.service';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

  public students$: ReplaySubject<User[]> = new ReplaySubject(1);

  constructor(
    //private accountService: AccountService
    private userService: UserServiceService
  ) {
    this.getAllStudents();
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.userService.getUsers('','','USER').subscribe(
      (res:any) => {
      this.students$.next(res)
      }
    )
  }

}
