import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { AccountService } from '../shared/services/account.service';
import { BsModalRef, BsModalService, TabHeadingDirective } from 'ngx-bootstrap';
import { Account } from '../shared/models/account';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

  modalRef: BsModalRef;
  private studentUsers: User[];
  public studentUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  /* private studentAccounts: Account[] = [];
  public studentAccounts$: ReplaySubject<Account[]> = new ReplaySubject(1); */
  private studentUserAccounts: {}[] = [];
  public studentUserAccounts$: ReplaySubject<{}[]> = new ReplaySubject(1);
  public accountToUpdate: Account;
  public userToShow: User;
  public inUpdate = false;
  public index: number;
  public confirmDelete = false;


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

  public openModalShowAccount(template: TemplateRef<any>, rowIndex: number) {
    this.accountToUpdate = { ...this.studentUserAccounts[rowIndex]['studentAccount'] };
    this.userToShow = { ...this.studentUserAccounts[rowIndex]['studentUser'] };
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    this.index = rowIndex;
  }

  public toggleUpdateAccount() {
    this.inUpdate = true;
  }

  public updateStudentAccount() {
    this.accountService.update(this.accountToUpdate).subscribe(
      (msg: string) => {
        this.studentUserAccounts[this.index]['studentAccount'] = this.accountToUpdate;
        this.inUpdate = false;
      }
    );
  }

  public askToConfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  public deleteStudentAccount() {
    this.accountService.delete(this.accountToUpdate.id).subscribe(
      (res: any) => {
        console.log(res);
        this.accountToUpdate = new Account();
        this.userToShow = new User();
        this.studentUserAccounts.splice(this.index, 1);
        this.studentUserAccounts$.next(this.studentUserAccounts);
        this.modalRef.hide();
        this.confirmDelete = !this.confirmDelete;
      });
  }

}
