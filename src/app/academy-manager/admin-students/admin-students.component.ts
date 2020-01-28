import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { AccountService } from '../shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

  private studentUsers: User[];
  public studentUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  private studentUserAccounts: {}[] = [];
  public studentUserAccounts$: ReplaySubject<{}[]> = new ReplaySubject(1);


  constructor(
    private accountService: AccountService,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.getAllStudents();
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.userService.getUsers('', '', 'USER').subscribe(
      (res: any) => {
        this.studentUsers = res;
        this.studentUsers$.next(res);
        this.studentUsers.forEach(student => this.getStudentAccount(student));
      }
    )
  }

  public getStudentAccount(studentUser: User) {
    this.accountService.getByUserId(studentUser.id).subscribe((account: any) => {
      if (account !== null) {
        this.studentUserAccounts.push({ 'studentUser': studentUser, 'studentAccount': account });
        this.studentUserAccounts$.next(this.studentUserAccounts);
      }
    });
  }

  public showProfile(userId: number) {
    this.router.navigate(['/academy-manager/profile/' + userId]);
  }


}
