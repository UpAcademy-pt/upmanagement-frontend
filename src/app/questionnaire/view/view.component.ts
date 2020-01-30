import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question-service/question.service';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Account } from '../models/account/account';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  constructor(
   private router: Router,

  ) {
    let questionnaireId: number = this.router.getCurrentNavigation().extras.state.id;
    console.log(questionnaireId);

   }

  ngOnInit() {
  }
 
}
