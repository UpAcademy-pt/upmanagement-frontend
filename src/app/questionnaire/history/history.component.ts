import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { element } from 'protractor';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private account: Account = new Account();
  private history: Questionnaire[];
  public pageOfItems: Array<any>;
  // Lembrar OnDestroy()
  public showStatsBtn = false;
  counter: number[];

  constructor(
    private questService: QuestionnaireService,
    private userService: UserServiceService
  ) { }

  ngOnInit(

  ) {
    this.getQuestionnaires();
  }
  public getCurrentUser(){
    return this.userService.getCurrentUser();
  }

  public getQuestionnaires() {
    this.questService.getAnsweredQuestionnaireByAccountId(this.account.idTeste).subscribe((history: Questionnaire[]) => {
      this.history = history; console.log(history);
      this.showStats();
    });
  }
  public showStats() {
    this.history.forEach(element => {
      element.viewPrivacy.includes(this.getCurrentUser().role);
    })
    this.showStatsBtn = true;
  }


  public onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}


