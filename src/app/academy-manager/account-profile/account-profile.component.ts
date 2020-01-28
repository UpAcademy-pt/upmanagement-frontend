import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { AccountService } from '../shared/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { Account } from '../shared/models/account';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {

  public account: Account;
  public account$: ReplaySubject<Account> = new ReplaySubject(1);
  private user: User;
  public user$: ReplaySubject<User> = new ReplaySubject(1);
  public inUpdate = false;
  private modalRef: BsModalRef;

  constructor(
    private userService: UserServiceService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.route.params.subscribe(
      params => {
        this.userService.getUserById(Number(params.userId)).subscribe(
          (user: User) =>{
            this.user = user;
            this.user$.next(this.user);
          }
        );
        this.accountService.getByUserId(Number(params.userId)).subscribe(
          (account: Account) =>{
            this.account = account;
            this.account$.next(this.account);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

  public toggleUpdateAccount() {
    this.inUpdate = true;
  }

  public updateTeacherAccount() {
    this.accountService.update(this.account).subscribe(
      (msg: string) => {
        this.inUpdate = false;
      }
    );
  }

  public openModalConfirmDelete(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public deleteAccount() {
    this.accountService.delete(this.account.id).subscribe(
      (res: any) => {
        console.log(res);
        this.modalRef.hide();
        this.returnToTable();
      });
  }

  public returnToTable() {
    if (this.user.role === 'USER') {
      this.router.navigate(['/academy-manager/admin-students']);
    } else if (this.user.role === 'SUPERUSER') {
      this.router.navigate(['/academy-manager/admin-teachers']);
    }
  }

  public getMisses() {
    //this.misses = this.http.get(this.URL);
  }

}
