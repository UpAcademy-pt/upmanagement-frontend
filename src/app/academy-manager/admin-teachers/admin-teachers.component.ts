import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AccountService } from '../shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.scss']
})
export class AdminTeachersComponent implements OnInit {

  private teacherUsers: User[];
  public teacherUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  private teacherUserAccounts: {}[] = [];
  public teacherUserAccounts$: ReplaySubject<{}[]> = new ReplaySubject(1);

  constructor(
    private userService: UserServiceService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.getAllTeachers();
  }

  ngOnInit() {
  }

  public getAllTeachers() {
    this.userService.getUsers('','','SUPERUSER').subscribe(
      (res:any) => {
        this.teacherUsers = res;
        this.teacherUsers$.next(res);
        this.teacherUsers.forEach(teacher => this.getTeacherAccount(teacher));
      }
    );
  }

  public getTeacherAccount(teacherUser: User) {
    this.accountService.getByUserId(teacherUser.id).subscribe((account: any) => {
      if (account !== null) {
        this.teacherUserAccounts.push({ 'teacherUser': teacherUser, 'teacherAccount': account });
        this.teacherUserAccounts$.next(this.teacherUserAccounts);
      }
    });
  }

  public showProfile(userId: number) {
    this.router.navigate(['/academy-manager/profile/' + userId]);
  }

}
