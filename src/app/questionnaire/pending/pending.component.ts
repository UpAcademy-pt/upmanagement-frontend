import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { ReplaySubject } from 'rxjs';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  private currentAccount: Account;
  public pendingQuestionnaires$: ReplaySubject<any[]>;
  faCheckCircle = faCheckCircle;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private questionnaireService: QuestionnaireService
  ) {
    this.questionnaireService.getPendingQuestionnaires();
    this.pendingQuestionnaires$ = questionnaireService.pendingQuestionnaires$;
  }

  ngOnInit() {
  }

  getCurrentDate(createDate: number) {
    let dateC = new Date(createDate);
    return dateC.getDate().toString().padStart(2, '0') + "/" + (dateC.getMonth() + 1).toString().padStart(2, '0') + "/" + dateC.getFullYear();
  }

  public solveThisQuestionnaire(questionnaireId: number) {
    this.router.navigate(['/questionario/pendentes/responder'], { state: { id: questionnaireId} });
  }

}
