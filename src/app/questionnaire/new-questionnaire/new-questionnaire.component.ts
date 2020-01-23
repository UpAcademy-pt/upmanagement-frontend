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

 //private questions: Question[] = this.b.questionList;

  public addQuestion(question: Question) {
    console.log('data');
    console.log(question);
    console.log(this.b);
    this.questionService.createQuestion(question).subscribe();
    if (this.b.questionList != undefined) {
      this.b.questionList.push(question);
    } else {
      this.b.questionList = [question];
    }
    console.log(this.b.questionList);
    this.a = new Question(); //ver se existe uma forma melhor
  }

  public addMoreOptions(option: string){
    console.log(option)
    if (this.a.options != undefined) {
      this.a.options.push(option);
    } else {
      this.a.options = [option];
    }
    option = "";
  }

  public addQuestionnaire(questionnaire: Questionnaire) {
    console.log('data');
    console.log(questionnaire);

    //this.questionnaireService.createQuestionnaire(questionnaire).subscribe();

    this.b = new Questionnaire(); //ver se existe uma forma melhor
  }

  public addNewQuestionOnForm(){
    console.log("entrou")
  }

  ngOnInit() {
  }

}
