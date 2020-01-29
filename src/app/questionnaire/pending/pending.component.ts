import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { logging } from 'protractor';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  public pendingQuestionnaires: Questionnaire[];
  private currentAccount: Account;
  public currentAccount$: ReplaySubject<Account> = new ReplaySubject(1);
  public subscriptionAccount: Subscription;

  constructor(
    private router: Router,
    private userService: UserServiceService,
    private accountService: AccountService
  ) {
    let currentUserId: number = userService.getCurrentUser().id;
    accountService.getAccountByUserId(currentUserId).subscribe(
      (account: Account) => {
        accountService.setCurrentAccount(account);
        //this.currentAccount = account;
      });

    this.currentAccount$ = this.accountService.currentAccount$;
    this.subscriptionAccount = this.currentAccount$.subscribe(account => {
      this.currentAccount = account;
      console.log("Dentro do subscribe do currentAccount$: " + JSON.stringify(this.currentAccount));
    });


    // this.pendingQuestionnaires = [{id: 1, name: "Questionário teste 1", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3},
    // {id: 2, name: "Questionário teste 2", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3},
    // {id: 3, name: "Questionário teste 3", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3}];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptionAccount.unsubscribe();
  }

  public solveThisQuestionnaire(i: number) {
    this.router.navigate(['/questionario/pendentes/responder'], { state: { id: this.pendingQuestionnaires[i].id } });
  }

}
