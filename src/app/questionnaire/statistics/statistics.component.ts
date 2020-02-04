import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { AccountService } from '../services/account-service/account.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public quest: Questionnaire;
  //public passedScore: Array<any> = [0,0];
  public passedScore: any = {aprovados:0, reprovados:0};
  public passedScore$: ReplaySubject<any[]>
  private questionnaireData;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private accountService: AccountService
  ) {
    /* this.route.params.subscribe(
      params => {
        this.quest = this.questService.getQuestionnaire(Number(params.id))
      }
    ) */
    this.questionnaireService.getAnsweredQuestionnaireByAccountId(
      this.accountService.getCurrentAccount().id
      ).subscribe(
      (questionnaireData: Questionnaire[]) => {
        this.questionnaireData = questionnaireData;
        questionnaireData.forEach(element => {
          if (element.qType == "QUIZ") (element.score > 70 ) ? this.passedScore.aprovados += 1 : this.passedScore.reprovados += 1
        });
        
        //questionnaireData.forEach(el -> (el.score > 70 ? this.passedScore[0] += 1 : this.passedScore[1] += 1))
      }
    )

  }

  ngOnInit() {
  }

  showStuff(){
    console.log(this.questionnaireData)
    console.log(this.passedScore)
  }

}
