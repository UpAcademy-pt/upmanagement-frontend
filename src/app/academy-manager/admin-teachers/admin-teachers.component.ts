import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AccountService } from '../shared/services/account.service';
import { Account } from '../shared/models/account';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.scss']
})
export class AdminTeachersComponent implements OnInit {

  modalRef: BsModalRef;
  private teacherUsers: User[];
  public teacherUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  private teacherUserAccounts: {}[] = [];
  public teacherUserAccounts$: ReplaySubject<{}[]> = new ReplaySubject(1);
  public accountToUpdate: Account;
  public userToShow: User;
  public inUpdate = false;
  public index: number;
  public confirmDelete = false;

  constructor(
    private userService: UserServiceService,
    private accountService: AccountService,
    private modalService: BsModalService
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

  public openModalShowAccount(template: TemplateRef<any>, rowIndex: number) {
    this.accountToUpdate = { ...this.teacherUserAccounts[rowIndex]['teacherAccount'] };
    this.userToShow = { ...this.teacherUserAccounts[rowIndex]['teacherUser'] };
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    this.index = rowIndex;
  }

  public toggleUpdateAccount() {
    this.inUpdate = true;
  }

  public updateTeacherAccount() {
    this.accountService.update(this.accountToUpdate).subscribe(
      (msg: string) => {
        this.teacherUserAccounts[this.index]['teacherAccount'] = this.accountToUpdate;
        this.inUpdate = false;
      }
    );
  }

  public askToConfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  public deleteTeacherAccount() {
    this.accountService.delete(this.accountToUpdate.id).subscribe(
      (res: any) => {
        console.log(res);
        this.accountToUpdate = new Account();
        this.userToShow = new User();
        this.teacherUserAccounts.splice(this.index, 1);
        this.teacherUserAccounts$.next(this.teacherUserAccounts);
        this.modalRef.hide();
        this.confirmDelete = !this.confirmDelete;
      });
  }

}
