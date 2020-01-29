import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Answer } from '../models/answer/answer';

@Component({
  selector: 'app-to-answer',
  templateUrl: './to-answer.component.html',
  styleUrls: ['./to-answer.component.scss']
})
export class ToAnswerComponent implements OnInit {

  private currentQuestionnaire: Questionnaire;
  private userName: string;
  faAngleDoubleDown = faAngleDoubleDown;

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private userService: UserServiceService
  ) {
    this.userName = userService.getCurrentName();
    let questionnaireId: number = this.router.getCurrentNavigation().extras.state.id;
    this.questionnaireService.getQuestionnaire(questionnaireId).subscribe(
      (currentQuestionnaire: Questionnaire) => {
        this.currentQuestionnaire = currentQuestionnaire;
        for (let i = 0; i < this.currentQuestionnaire.questionList.length; i++) {
          let answer: Answer = new Answer({questionnaireId: this.currentQuestionnaire.id, answer: [], questionId: this.currentQuestionnaire.questionList[i].id});
          this.currentQuestionnaire.answerList.push(answer);
        }
      });
  }

  ngOnInit() { }

  public sendQuestionnaire() {
    for (let i = 0; i < this.currentQuestionnaire.answerList.length; i++) {
      if (this.currentQuestionnaire.questionList[i].aType == "MULTIPLE") {
        this.currentQuestionnaire.answerList[i].answer = this.currentQuestionnaire.answerList[i].answer
          .map((option, index) => option = "true" ? "" + index : "false")
          .filter(option => option != "false");
      }
    }
    console.log("Respontas a enviar: " + JSON.stringify(this.currentQuestionnaire.answerList));
    this.questionnaireService.updateQuestionnaire(this.currentQuestionnaire).subscribe(
      (msg: string) => {
        console.log(msg);
        for (let i = 0; i < this.currentQuestionnaire.answerList.length; i++) {
          this.currentQuestionnaire.answerList[i].answer = [];
        }
        this.router.navigate(['/questionario/pendentes']);
      });
  }

}
