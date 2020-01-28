import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private account: Account = new Account();
  private history: Questionnaire[];
  // Table
  private headers: ["accountId"]
// Lembrar OnDestroy()
  public showStatsBtn = false;
  private user: User;

  constructor(
    private questService: QuestionnaireService,
  ) {
    /* this.history.forEach(element => {
      element.viewPrivacy.includes(this.user.role)
    }) 
    this.showStatsBtn = true; */
  }

  ngOnInit(

  ) {
    this.getPendingQuestionnaires();
    this.showStats();
  }

  public getPendingQuestionnaires() {
    this.questService.getAnsweredQuestionnaireByAccountId(this.account.idTeste).subscribe((history: Questionnaire[]) => {
      this.history = history; console.log(history);
    });
  }
  public showStats() {
    this.history.forEach(element => {
      element.viewPrivacy.includes(this.user.role)
    })
    this.showStatsBtn = true;
    }


  }


