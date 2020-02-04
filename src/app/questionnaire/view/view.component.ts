import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { faAngleDoubleDown, faAngleDoubleUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  private currentQuestionnaire: Questionnaire;
  faAngleDoubleDown = faAngleDoubleDown;
  faAngleDoubleUp = faAngleDoubleUp;

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
  ) {
    let questionnaireId: number = this.router.getCurrentNavigation().extras.state.id;
    this.questionnaireService.getQuestionnaire(questionnaireId).subscribe(
      (currentQuestionnaire: Questionnaire) => {
        currentQuestionnaire.questionList.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        currentQuestionnaire.answerList.sort((a, b) => (a.questionId > b.questionId) ? 1 : ((b.questionId > a.questionId) ? -1 : 0))
        this.currentQuestionnaire = currentQuestionnaire;
        console.log(this.currentQuestionnaire);
      });
  }

  isSelected(i: number, j: number) {
    return this.currentQuestionnaire.answerList[i].answer.includes(String(j));
  }

  checkAnswer(i: number, j: number) {
    if (this.currentQuestionnaire.qType != "QUIZ") {
      return "";
    }
    if (this.currentQuestionnaire.questionList[i].rightAnswer.includes(String(j)) && this.isSelected(i, j)) {
      return "rightAnswer";
    } else if (!this.currentQuestionnaire.questionList[i].rightAnswer.includes(String(j)) && this.isSelected(i, j)) {
      return "wrongAnswer";
    } else if (this.currentQuestionnaire.questionList[i].rightAnswer.includes(String(j)) && !this.isSelected(i, j)) {
      return "rightAnswerIsh";
    }
  }

  ngOnInit() {
  }

}
