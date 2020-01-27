import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public quest: Questionnaire;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questService: QuestionnaireService
  ) {
    /* this.route.params.subscribe(
      params => {
        this.quest = this.questService.getQuestionnaire(Number(params.id))
      }
    ) */
  }

  ngOnInit() {
  }

}
