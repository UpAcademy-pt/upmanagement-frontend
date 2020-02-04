import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { AccountService } from '../services/account-service/account.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public quest: Questionnaire;
  public passedScore: Array<any> = [0,0];
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
          (element.score > 70 && element.qType == "QUIZ") ? this.passedScore[0] += 1 : this.passedScore[1] += 1
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
