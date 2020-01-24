import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { AccountService } from './shared/services/account.service';
import { Account } from './shared/models/account';

@Component({
  selector: 'app-academy-manager',
  templateUrl: './academy-manager.component.html',
  styleUrls: ['./academy-manager.component.scss']
})
export class AcademyManagerComponent implements OnInit {

  public showAdminSidebar: boolean = false;
  private userId: number;
  private currentAccount: Account = new Account();

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private accountService: AccountService
  ) {
    this.userId = this.userService.getCurrentUser().id;
    this.accountService.getByUserId(this.userId).subscribe((res:any) => {
      if (res === null) {
        this.currentAccount.userId = this.userId;
        this.accountService.create(this.currentAccount).subscribe((res:any) => this.currentAccount = res);
      } else {
        this.currentAccount = res;
      }
    });

    if (this.userService.isAdmin()) {
      this.showAdminSidebar = true;
      this.router.navigate
      (['academy-manager/admin-academies']);
    } else {
      this.router.navigate(['academy-manager/my-academies']);
    }
  }

  ngOnInit() {
  }

  
}
