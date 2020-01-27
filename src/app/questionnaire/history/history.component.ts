import { Component, OnInit } from '@angular/core';
import { AnsweredQuestionnaireService } from '../services/answeredQuestionnaire-service/answered-questionnaire.service';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { AnsweredQuestionnaire } from '../models/answeredQuestionnaire/answered-questionnaire';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private account: Account = new Account();
  private history: AnsweredQuestionnaire[];
  // Table
  private headers: ["accountId"]
// Lembrar OnDestroy()

  constructor(
    private answeredQuestService: AnsweredQuestionnaireService,
    private questService: QuestionnaireService
  ) { }

  ngOnInit(

  ) {
    this.getPendingQuestionnaires();
  }

  public getPendingQuestionnaires() {
    this.answeredQuestService.getAnsweredQuestionnaireByAccountId(this.account.id).subscribe((history: AnsweredQuestionnaire[]) => {
      this.history = history; console.log(history);
    });

  }

}
