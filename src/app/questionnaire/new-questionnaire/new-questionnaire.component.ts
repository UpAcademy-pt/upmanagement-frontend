import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {

  constructor(
    private questionService: QuestionService,
    private questionnaireService: QuestionnaireService
  ) {}

 private a: Question = new Question();
 private b: Questionnaire = new Questionnaire();

  public addQuestion(question: Question) {
    console.log('data');
    console.log(question);
    this.questionService.createQuestion(question).subscribe();
  }

  public addQuestionnaire(questionnaire: Questionnaire) {
    console.log('data');
    console.log(questionnaire);
    //this.questionnaireService.createQuestionnaire(questionnaire).subscribe();
  }

  public addNewQuestionOnForm(){
    console.log("entrou")
  }

  ngOnInit() {
  }

}
