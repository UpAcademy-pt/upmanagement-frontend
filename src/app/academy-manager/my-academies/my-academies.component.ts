import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AcademyService } from '../shared/services/academy.service';
import { ReplaySubject } from 'rxjs';
import {Account} from '../shared/models/account';
import { Academy } from '../shared/models/academy';

@Component({
  selector: 'app-my-academies',
  templateUrl: './my-academies.component.html',
  styleUrls: ['./my-academies.component.scss']
})
export class MyAcademiesComponent implements OnInit {
  public currentAccount: Account;
  public currentAccount$: ReplaySubject<Account>;
  public academies: Academy[];
  public academy: Academy;

  constructor(
    private accountService: AccountService,
    private academyService: AcademyService,

  ) {
    this.currentAccount$ = this.accountService.currentAccount$;
    this.currentAccount$.subscribe((account) => {
      this.currentAccount = account;
      this.currentAccount.academyIds.forEach(element => {
        this.academyService.getbyId(element).subscribe((academy: any) => {
          this.academies.push(academy);
          this.academy = this.academies[0];
          console.log(academy);
        });
      });
    });

  }

  ngOnInit() {  }

}

