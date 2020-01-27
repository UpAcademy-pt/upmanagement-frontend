import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { AccountService } from '../shared/services/account.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

  modalRef: BsModalRef;
  private studentUsers: User[];
  public studentUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  private studentAccounts: Account[] = [];
  public studentAccounts$: ReplaySubject<Account[]> = new ReplaySubject(1);
  public accountToShow: Account;

  constructor(
    private accountService: AccountService,
    private userService: UserServiceService,
    private modalService: BsModalService
  ) {
    this.getAllStudents();
    
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.userService.getUsers('','','USER').subscribe(
      (res:any) => {
      this.studentUsers = res;
      this.studentUsers$.next(res);
      this.studentUsers.forEach(student => this.getStudentAccount(student));
      }
    )
  }

  public getStudentAccount(studentUser: User) {
    this.accountService.getByUserId(studentUser.id).subscribe((res:any) => {
      this.studentAccounts.push(res);
      this.studentAccounts$.next(this.studentAccounts);
      });
  }

  openModalShowAccount(template: TemplateRef<any>, rowIndex: number) {
    this.accountToShow = {...this.studentAccounts[rowIndex]};
    this.modalRef = this.modalService.show(template);
  }

}
